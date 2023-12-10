import {CSSProperties, ReactNode} from "react";
import cl from "./card.module.css"
export default function Card ({style, children}:{style?:CSSProperties, children:ReactNode}) {
    return (
        <div style={style} className={cl.card}>
            {children}
        </div>
    )
}