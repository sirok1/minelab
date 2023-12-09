import {ReactNode} from "react";
import cl from "./card.module.css"

export default function MineCraftCard ({footer, coverUrl, title, children}:{footer:any[], coverUrl:string, title:string, children:ReactNode}) {
    return (
        <div className={`${cl.card} cursor-pointer`}>
            <h3>{title}</h3>
            {children}
            <hr/>
        </div>
    )
}