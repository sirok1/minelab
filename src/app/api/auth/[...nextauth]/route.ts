import {handlers} from "@/auth";
import {NextRequest} from "next/server";

const {GET: AuthGET, POST} = handlers
export {POST}

export async function GET(request: NextRequest){
    return await AuthGET(request)
}