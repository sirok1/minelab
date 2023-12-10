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
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log(data)
    }

    return (
        <Container maxWidth="xs">
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