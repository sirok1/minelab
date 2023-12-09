import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                login: {label: "Логин", type: "text", placeholder: "username"},
                password: {label: "Пароль", type: "password"}
            },
            async authorize(credentials, req) {

            }
        })
    ]
})

export {handler as GET, handler as POST}