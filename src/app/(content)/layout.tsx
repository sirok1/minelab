import React from "react";
import cl from "@/app/(content)/mainLayout.module.css";
import Image from "next/image";
import NavLink from "@/components/UI/navLink/NavLink";
import LoginButton from "@/components/UI/loginButton/LoginButton";
import Header from "@/components/UI/header/Header";
import Footer from "@/components/UI/footer/Footer";
import Link from "next/link";

export default function Layout({children}:{children:React.ReactNode}){
    return (
        <div>
            <Header>
                <div className={cl.menu}>
                    <Image priority src={"/assets/icon.svg"} width={30} height={30} alt={"logo"}/>
                    <div className={cl.linksContainer}>
                        <NavLink text={"Главная"} url={"/"}/>
                        <NavLink text={"Моды"} url={"/mods"}/>
                        <NavLink text={"Текстурпаки"} url={"/texturepacks"}/>
                        <NavLink text={"Сборки"} url={"/assemblies"}/>
                    </div>
                </div>
                <LoginButton/>
            </Header>
            <main className={cl.content}>
                {children}
            </main>
            <Footer>
                <div className={cl.socialLinks}>
                    <Link target={"_blank"} href={'https://vk.com'}><Image src={"/assets/vk-icon.svg"} alt={"vk logo"}
                                                                           height={40} width={40}/></Link>
                    <Link target={"_blank"} href={'https://youtube.com'}><Image src={"/assets/youtube-icon.svg"}
                                                                                alt={"youtube logo"} height={40}
                                                                                width={40}/></Link>
                    <Link target={"_blank"} href={'https://x.com'}><Image src={"/assets/x-icon.svg"} alt={"x logo"}
                                                                          height={40} width={40}/></Link>
                </div>
                <div className={cl.serviceInfo}>
                    <Link href={"/terms-of-service"}>Соглашение</Link>
                    <Link href={"/privacy-policy"}>Конфиденциальность</Link>
                    <span>© {new Date().getFullYear()} — sirok1 | Все права защищены</span>
                </div>
            </Footer>
        </div>
    )
}