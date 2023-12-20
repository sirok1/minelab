import React from "react";
import cl from './header.module.css'

export default function Header ({children}:{children:React.ReactNode}){
    return(
        <header className={cl.header}>
            <div className={cl.headerContainer}>
                {children}
            </div>
        </header>
    )
}