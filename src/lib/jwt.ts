import jwt from "jsonwebtoken"
export function generateAccessToken(user: {login:string, hashedPassword:string}):string|null{
    if (!process.env.ACCESS_SECRET){
        console.error('no ACCESS_SECRET found!')
        return null
    }
    // @ts-ignore
    return jwt.sign(user, process.env.ACCESS_SECRET, {expiresIn: "30d"})
}