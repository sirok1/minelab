import {ReactNode} from "react";
import cl from "./footer.module.css"
export default function Footer ({children}:{children:ReactNode}) {
    return (
        <footer className={cl.pinedFooter}>
            {children}
        </footer>
    )
}