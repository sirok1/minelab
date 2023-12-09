import Login from "@/components/auth/login/Login";
import Card from "@/components/UI/card/Card";

export default function LoginPage(){
    return (
        <>
            <div className={"flex flex-col min-h-full justify-center"}>
                <Card>
                    <Login/>
                </Card>
            </div>
        </>
    )
}
