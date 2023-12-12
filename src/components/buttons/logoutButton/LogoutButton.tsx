"use client"
import Button from "@mui/material/Button";
import axios from "axios";
import {useRouter} from "next/navigation";
import {message} from "antd";

export default function LogoutButton(){
    const router = useRouter()
    const handleLogout = (e:any) => {
        axios.delete('/api/user/logout').then(() => {
            router.replace("/")
            message.success("Выход успешно выполнен")
        })
    }
    return (
        <Button variant={"contained"} onClick={handleLogout} size={'large'}>Выйти</Button>
    )
}