"use client";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {handleAction} from "next/dist/server/app-render/action-handler";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {useState} from "react";
import {Backdrop, CircularProgress} from "@mui/material";
import axios from "axios";
import {useRouter} from "next/navigation";
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link href="/" style={{textDecoration: "none", color: "black"}}>
                MINELAB
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Register() {
    const [passwordError, setPasswordError] = useState("")
    const [loginError, setLoginError] = useState("")
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        if (!data.get("login") || !data.get("first-password")|| !data.get("second-password")) {
            if (!data.get("login")) setLoginError("Придумайте логин")
            if (!data.get("second-password")) setPasswordError("Пароли не совпадают")
            if (!data.get("first-password")) setPasswordError("Придумайте пароль")
            return handleBackdrop()
        }
        setLoginError("")
        setPasswordError("")
        if (data.get("first-password") !== data.get("second-password")){
            setPasswordError("Пароли не совпадают")
            return handleBackdrop()
        }
        if (`${data.get("first-password")}`.length < 6){
            setPasswordError("Пароль должен содержать минимум 6 символов")
            return handleBackdrop()
        }
    }
    const handleBackdrop = () => {
        setOpen(!open)
    }
    return (
        <Container maxWidth="xs">
            <Backdrop
                sx={{ color: '#fff', zIndex: 10001 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: 'center'
                }}
            >
                <Typography component="h1" variant="h5">
                    Регистрация
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt:1}}>
                    <TextField
                        error={!!loginError}
                        helperText={loginError}
                        margin='normal'
                        required
                        fullWidth
                        id="login"
                        label="Логин"
                        name="login"
                        autoComplete="nickname"
                        autoFocus
                    />
                    <TextField
                        error={!!passwordError}
                        helperText={passwordError}
                        margin="normal"
                        required
                        fullWidth
                        name="first-password"
                        id="first-password"
                        type="password"
                        label="Новый пароль"
                        autoComplete='new-password'
                    />
                    <TextField
                        error={!!passwordError}
                        helperText={passwordError}
                        margin="normal"
                        required
                        fullWidth
                        name="second-password"
                        id="second-password"
                        type="password"
                        label="Повторите пароль"
                        autoComplete="new-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                        onClick={handleBackdrop}
                    >
                        Зарегистрироваться
                    </Button>
                    <div style={{textAlign: "right"}}>
                        <Link href={"/login"} style={{textDecoration: "none", color: "blue"}}>
                            Есть аккаунт? Войдите
                        </Link>
                    </div>
                </Box>
            </Box>
            <Copyright sx={{mt: 8, mb: 4}} />
        </Container>
    )
}