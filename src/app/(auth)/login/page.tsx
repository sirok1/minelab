import Login from "@/components/auth/login/Login";
import Card from "@/components/UI/card/Card";
import Register from "@/components/auth/register/Register";

export default function LoginPage(){
    return (
        <>
            <div style={{display: "flex", minHeight: "100%", minWidth: "100%", justifyContent: "center", alignItems: "center"}}>
                <Card style={{width: "30%", height: "50%"}}>
                    <Login/>
                </Card>
            </div>
        </>
    )
}
