import React from "react";
import Link from "next/link";
import cl from "./navLink.module.css"

export default function NavLink({text, url}:{text:string, url:string}){
    return (
        <Link className={cl.navLink} href={url}>{text}</Link>
    )
}