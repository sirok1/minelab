import {NextRequest} from "next/server";
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()
export async function POST(request:NextRequest){
    const jsonRequest = await request.json()
    const user = await prisma.user.findUnique({where: {login: `${jsonRequest.login}`}})

}