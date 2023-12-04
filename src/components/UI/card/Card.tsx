import {ReactNode} from "react";
import cl from "./card.module.css"
export default function Card ({children}:{children:ReactNode}) {
    return (
        <div className={cl.card}>
            {children}
        </div>
    )
}