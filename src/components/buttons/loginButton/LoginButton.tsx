import Link from "next/link"
import cl from "./loginButton.module.css"
export default function LoginButton(){
    return (
        <Link href={"/login"}>
            <button className={cl.button}>
                <div className={cl.container}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="42" viewBox="0 0 37 42" fill="none">
                        <path d="M34.1548 17.0929C37.178 18.8204 37.178 23.1796 34.1548 24.9071L7.23262 40.2912C4.23267 42.0055 0.5 39.8393 0.5 36.3841L0.5 5.6159C0.5 2.1607 4.23267 -0.00545597 7.23262 1.7088L34.1548 17.0929Z" fill="#3B9EA2" stroke="#D9D9D9"/>
                    </svg>
                    <span className={cl.text}>Войти</span>
                </div>
            </button>
        </Link>
    )
}