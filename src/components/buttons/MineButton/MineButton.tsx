import {CSSProperties, MouseEventHandler, ReactNode} from "react";
import cl from './mineButton.module.css'
import Link from "next/link";
export default function MineButton({style, onClick, href, children}:{style?:CSSProperties, onClick?: MouseEventHandler<HTMLButtonElement>, href?:string, children:ReactNode}) {
    const ComponetContainer =
        <div className={cl.container}>
            {children}
        </div>
    let Component
    if (href) Component = <Link href={href}><button style={style} onClick={onClick} className={cl.button}>{ComponetContainer}</button></Link>
    else Component = <button style={style} onClick={onClick} className={cl.button}>{ComponetContainer}</button>
    return (Component)
}