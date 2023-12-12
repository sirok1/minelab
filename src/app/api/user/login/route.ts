import {generateAccessToken} from "@/lib/jwt";
import prismadb from "@/lib/prismadb";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import {cookies} from "next/headers";
import {createCookie} from "@/lib/actions";
export async function POST(req:Request){
    const {login, password} = await req.json()
    const user = await prismadb.user.findUnique({
        where: {
            login
        }
    })
    if (!user) return new NextResponse("userNotFound", {status: 404})
    const isPasswordCorrect = await bcrypt.compare(password, user.hashedPassword)
    if (!isPasswordCorrect) return new NextResponse("incorrectPassword", {status: 401})
    //todo проверка на валидность токена по времени
    let accessToken:string|null = user.token?? generateAccessToken({login: user.login, hashedPassword: user.hashedPassword})
    if (!accessToken) return new NextResponse('internal error', {status: 500})
    //неправильное обновление токен куки
    await createCookie({
        name: "token",
        value: accessToken,
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 30
    })
    return NextResponse.json({
        ...user
    })
}