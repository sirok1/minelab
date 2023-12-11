import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";
import {NextResponse} from "next/server";

export async function POST(req:Request) {
    try {
        const {login, password} = await req.json()
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = await prismadb.user.create({
            data: {
                login: login,
                hashedPassword: hashedPassword
            }
        })
        console.log(user)
        return NextResponse.json(user)
    }
    catch (e) {
        console.error(e)
        return new NextResponse("internalError", {status: 500})
    }
}