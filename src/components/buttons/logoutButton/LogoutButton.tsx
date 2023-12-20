"use client"
import Button from "@mui/material/Button";
import {message} from "antd";
import {logOut} from "@/actions/server/authenticate";

export default function LogoutButton(){
    const handleLogout = (e:any) => {
        logOut().then(() => {
            message.success("Выход успешно выполнен")
        })
    }
    return (
        <Button variant={"contained"} onClick={handleLogout} size={'large'}>Выйти</Button>
    )
}