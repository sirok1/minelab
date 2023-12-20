"use server"
import {signIn, signOut} from '@/auth';
import { AuthError } from 'next-auth';
import prismadb from "@/lib/prismadb";
import {hash} from "@/actions/server/crypto";
import {AvatarGenerator} from "random-avatar-generator";
import {redirect} from "next/navigation";

export async function authenticate(
    formData: {login:string, password:string},
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function logOut(){
    await signOut()
}

export async function register(
    formData: {login:string, password:string}
){
    const isUserExist = await prismadb.user.findUnique({
        where: {
            login: formData.login
        }
    })
    if (isUserExist) throw new Error("user already exists")
    const hashedPassword = await hash(formData.password)
    const avatarGenerator = new AvatarGenerator()
    await prismadb.user.create({
        data: {
            login: formData.login,
            hashedPassword: hashedPassword,
            avatarUrl: avatarGenerator.generateRandomAvatar()
        }
    })
    //слишком много запросов к базе
    await authenticate(formData)
}