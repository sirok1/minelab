import Login from "@/components/auth/login/Login";
import Card from "@/components/UI/card/Card";

export default function LoginPage(){
    return (
        <>
            <div style={{display: "flex", minHeight: "100%", minWidth: "100%", justifyContent: "center", alignItems: "center"}}>
                <Card>
                    <Login/>
                </Card>
            </div>
        </>
    )
}
