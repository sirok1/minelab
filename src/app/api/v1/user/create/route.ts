import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt"
const prisma = new PrismaClient()
export async function POST(request:NextRequest){
    const jsonRequest = await request.json()
    const user = await prisma.user.findUnique(
        {
            where: {
                login: `${jsonRequest.login}`
            }
        }
    )
    let res:NextResponse|null = null
    if (user) {
        res = new NextResponse("Пользователь с таким логином уже существует", {
            status: 400
        })
    }
    else {
        const password = await bcrypt.hash(jsonRequest.password, 12)
        const newUser = await prisma.user.create({
            data: {
                login: `${jsonRequest.login}`,
                password: password
            }
        })
        res = new NextResponse(user, {
            status: 200
        })
    }
    return res
}