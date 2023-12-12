import {deleteCookie} from "@/lib/actions";
import {NextResponse} from "next/server";

export async function DELETE(req:Request){
    await deleteCookie("token")
    return new NextResponse("done", {status: 200})
}