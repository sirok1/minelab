import {serverAuth} from "@/lib/serverAuth";
import {NextResponse} from "next/server";

export async function GET(req:Request){
    if (req.method === "GET"){
        try {
            const {currentUser} = await serverAuth()
            return NextResponse.json(currentUser)
        }
        catch (e) {
            console.error(e)
            return NextResponse.json("Not signed in", {status: 401})
        }
    }
    return NextResponse.json('Unexpected request', {status: 405})
}