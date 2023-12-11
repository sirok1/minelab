import NextAuth from "next-auth";
import {authConfig} from "@/config/nextauth.config";
import CredentialsProvider from "next-auth/providers/credentials";
import {z} from "zod";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";

export const {auth, signIn, signOut} = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                login: { label: 'Логин', type: 'text' },
                password: { label: 'Пароль', type: 'password' },
            },
            // @ts-ignore
            async authorize(credentials){
                const parsedCredentials = z
                    .object({login: z.string(), password: z.string()})
                    .safeParse(credentials)
                if (parsedCredentials.success){
                    const {login, password} = parsedCredentials.data
                    const user = await prisma.user.findUnique({
                        where: {
                            login: login
                        }
                    });
                    if (!user || !user?.hashedPassword) return null
                    const isCorrectPassword = await bcrypt.compare(
                        password,
                        user.hashedPassword
                    );
                    if (isCorrectPassword) return user
                }
                console.error('invalid credentials')
                return null
            }
        })
    ],
})