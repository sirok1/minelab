import Card from "@/components/UI/card/Card";
import Register from "@/components/auth/register/Register";

export default function RegisterPage() {
    return (
        <>
            <div style={{display: "flex", minHeight: "100%", minWidth: "100%", justifyContent: "center", alignItems: "center"}}>
                <Card style={{width: "30%", height: "50%"}}>
                    <Register/>
                </Card>
            </div>
        </>
    )
}