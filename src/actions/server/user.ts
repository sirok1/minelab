"use server"
import {auth} from "@/auth";
import prismadb from "@/lib/prismadb";

export async function getCurrentUser(){
    const session = await auth()
    if (!session || !session.user) return null
    const user = await prismadb.user.findUnique({
        where: {
            login: `${session.user.email}`,
        }
    })
    if (!user) return null
    return {login: user.login, avatarUrl: user.avatarUrl, createAt: user.createAt, role: user.role}
}