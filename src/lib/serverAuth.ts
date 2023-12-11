import {getServerSession} from "next-auth";
import prismadb from "@/lib/prismadb";
import {authConfig} from "@/config/nextauth.config";

export async function serverAuth(){
    const session = await getServerSession(authConfig)
    console.log(session)
    // @ts-ignore
    if (!session?.user?.login) throw new Error("not signed in")
    const currentUser = await prismadb.user.findUnique({
        where: {
            login: `${session.user.email}`
        }
    })
    if (!currentUser) throw new Error("not signed in")
    return { currentUser }
}