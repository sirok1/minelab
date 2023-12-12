"use client";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useState} from "react";
import {Backdrop, CircularProgress} from "@mui/material";
import {useRouter} from "next/navigation";
import axios from "axios";

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

export default function Login() {
    const [passwordError, setPasswordError] = useState("")
    const [loginError, setLoginError] = useState("")
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (!data.get("login") || !data.get('password')){
            setLoginError("Заполните все поля")
            setPasswordError("Заполните все поля")
            return handleBackdrop()
        }
        setLoginError("")
        setPasswordError("")
        try {
            await axios.post("/api/user/login", {
                login: data.get("login"),
                password: data.get("password")
            })
            setOpen(false)
            router.replace("/profile")
        }
        catch (e) {
            console.error(e)
            setLoginError("Неправильное имя пользователя или пароль")
            setPasswordError("Неправильное имя пользователя или пароль")
            setOpen(false)
        }

    };

    const handleBackdrop = () => {
        setOpen(!open)
    }

    return (
        <Container component="main" maxWidth="xs">
            <Backdrop
                sx={{ color: '#fff', zIndex: 10001 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Войти
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        error={!!loginError}
                        helperText={loginError}
                        margin="normal"
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
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleBackdrop}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Войти
                    </Button>
                    <div style={{textAlign: "right"}}>
                        <Link href="/register" style={{textDecoration: "none", color: "blue"}}>
                            Нет аккаунта ? Зарегистрируйтесь
                        </Link>
                    </div>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}