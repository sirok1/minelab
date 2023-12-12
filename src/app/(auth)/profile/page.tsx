import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import prismadb from "@/lib/prismadb";
import Card from "@/components/UI/card/Card";
import {Table} from "antd";
import hdate from "human-date"
import LogoutButton from "@/components/buttons/logoutButton/LogoutButton";

export default async function Profile(){
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    console.log(token)
    if (!token) return redirect("/login")
    const user = await prismadb.user.findUnique({
        where: {
            token: `${token.value}`
        }
    })
    if (!user) return redirect("/login")
    return (
        <>
            <div style={{minWidth: "100%", display: "flex", justifyContent: "center", maxHeight: "60%", alignItems: "center"}}>
                <Card>
                  <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", gap: "2rem", alignItems: "center"}}>
                        <img src={user.avatarUrl} alt='user avatar'/>
                        <span style={{fontSize: 32}}>{user.login}</span>
                        <span style={{fontSize: 16}}>Зарегистрирован: {hdate.prettyPrint(user.createAt)}</span>
                        <LogoutButton/>
                    </div>
                  </div>
                </Card>
            </div>
        </>
    )
}