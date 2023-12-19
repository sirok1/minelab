"use client"
import React, {useState} from "react";
import {Drawer, Fab, List, ListItem} from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import cl from "./menuWrappers.module.css"
export default function MenuWrapper(){
    const [isOpen, setOpen] = useState(false)
    return(
        <div>
            <Drawer open={isOpen} anchor={'right'} onClose={() => setOpen(false)}>
                <List style={{fontSize: 24, paddingInline: "2em", gap:"1.2em", display: "flex", flexDirection: "column"}}>
                    <ListItem>
                        <Link href={"/"} style={{color: "black", textDecoration: "none"}}>
                            Главная
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"/mods"} style={{color: "black", textDecoration: "none"}}>
                            моды
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"/texturepacks"} style={{color: "black", textDecoration: "none"}}>
                            моды
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href={"/profile"} style={{color: "black", textDecoration: "none"}}>
                            Профиль
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
            <Fab className={cl.button} variant={"extended"} style={{position: "fixed", top: 15, right: 5}} onClick={() => setOpen(true)}>
                <MenuIcon/>
                Меню
            </Fab>
        </div>
    )
}