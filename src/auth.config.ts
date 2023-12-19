import {NextAuthConfig} from "next-auth";

export const authConfig = {
    pages: {
        signIn: "/login",
        newUser: "/register"
    },
    callbacks: {
        authorized({auth, request: {nextUrl}}){
            const isLoggedIn = !!auth?.user;
            if ((nextUrl.pathname.startsWith("/login") || nextUrl.pathname.startsWith("/register")) && isLoggedIn){
                return Response.redirect(new URL("/", nextUrl))
            }
            else {
                return isLoggedIn;
            }
        }
    },
    providers: []
} satisfies NextAuthConfig