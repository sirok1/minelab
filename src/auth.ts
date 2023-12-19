import prismadb from "@/lib/prismadb";
import NextAuth from "next-auth";
import {authConfig} from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import {z} from "zod";
import bcrypt from "bcrypt"
import {compareHashes} from "@/actions/server/crypto";

async function getUser(login:string){
    const user = await prismadb.user.findUnique({
        where: {
            login: login
        }
    })
    return user? {email: login, ...user} : null
}

export const {auth, signIn, signOut, handlers} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            // @ts-ignore
            async authorize(credentials){
                const parsedCredentials = z
                    .object({login: z.string(), password: z.string().min(6)})
                    .safeParse(credentials)

                if (parsedCredentials.success) {
                    const {login, password} = parsedCredentials.data
                    const user = await getUser(login)
                    if (!user) return null
                    const passwordMatch = await compareHashes(password, user.hashedPassword)
                    if (passwordMatch) return user
                    else return null
                }
                return null
            }
        })
    ]
})