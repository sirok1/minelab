import {generateAccessToken} from "@/lib/jwt";
import prismadb from "@/lib/prismadb";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
export async function POST(req:Request){
    const {login, password} = await req.json()
    const user = await prismadb.user.findUnique({
        where: {
            login
        }
    })
    if (!user) return new NextResponse("userNotFound", {status: 404})
    const isPasswordCorrect = bcrypt.compare(password, user.hashedPassword)
    if (!isPasswordCorrect) return new NextResponse("incorrectPassword", {status: 401})
    const accessToken = generateAccessToken({login: user.login, hashedPassword: user.hashedPassword})
    return NextResponse.json({
        ...user,
        accessToken
    })
}