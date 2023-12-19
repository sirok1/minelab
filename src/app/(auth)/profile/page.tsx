import {redirect} from "next/navigation";
import Card from "@/components/UI/card/Card";
import hdate from "human-date"
import LogoutButton from "@/components/buttons/logoutButton/LogoutButton";
import {getCurrentUser} from "@/actions/server/user";
export default async function Profile(){
    const user = await getCurrentUser()
    if (!user) redirect("/")
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