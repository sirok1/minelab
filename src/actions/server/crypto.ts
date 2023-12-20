"use server"
import bcrypt from "bcrypt";

export async function compareHashes(decrypted: string, encrypted: string){
    return await bcrypt.compare(decrypted, encrypted)
}

export async function hash(strToEncrypt:string, salt:number = 12){
    return await bcrypt.hash(strToEncrypt, salt)
}