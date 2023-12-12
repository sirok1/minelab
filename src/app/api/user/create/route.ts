import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";
import {NextResponse} from "next/server";
import {generateAccessToken} from "@/lib/jwt";
import {createCookie} from "@/lib/actions";
import {AvatarGenerator} from "random-avatar-generator";

export async function POST(req:Request) {
    try {
        const {login, password} = await req.json()
        const existedUser = await prismadb.user.findUnique({
            where: {
                login
            }
        })
        if (existedUser) return new NextResponse("userAlreadyExists", {status: 403})
        const hashedPassword = await bcrypt.hash(password, 12)
        const token = generateAccessToken({login: login, hashedPassword: hashedPassword})
        if (!token) return new NextResponse("internalError", {status: 500})
        const avatarGenerator = new AvatarGenerator()
        const user = await prismadb.user.create({
            data: {
                login: login,
                hashedPassword: hashedPassword,
                token: token,
                tokenExpires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
                avatarUrl: avatarGenerator.generateRandomAvatar()
            }
        })
        console.log(user)
        await createCookie({
            secure: true,
            value: token,
            name: 'token',
            maxAge: 1000 * 60 * 60 * 24 * 30
        })
        return NextResponse.json({...user})
    }
    catch (e) {
        console.error(e)
        return new NextResponse("internalError", {status: 500})
    }
}