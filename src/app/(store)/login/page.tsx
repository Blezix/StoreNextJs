"use client";
import { useState } from "react";
import { useUser } from "@/app/UserContext";
import { TextField, Button, Box, Paper, Link } from "@mui/material";
import Text from "@/app/_components/Text";
export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useUser();

    const handleLogin = async () => {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
        });

        if (res.ok) {
            const user = await res.json();
            console.log(user);
            setUser(user);
            window.location.reload();
        } else {
            alert("Login failed");
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "100vw",
                height: "100vh",
                margin: "auto",
                backdropFilter: "blur(10px)",
                backgroundImage: "url(/Assets/Banner.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    backdropFilter: "blur(5px)",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                }}
            >
                <Paper
                    elevation={5}
                    sx={{
                        backgroundColor: "rgba(255,255,255,0.8)",
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: "30%",
                        height: "600px",
                        margin: "auto",
                        backdropFilter: "blur(5px)",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            color: "black",
                            marginBottom: 2,
                        }}
                    >
                        Login
                    </Text>

                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        sx={{
                            width: "80%",
                            "& .MuiInputBase-root": {
                                color: "black",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "black",
                            },
                            "& .MuiInputLabel-root": {
                                color: "black",
                            },
                        }}
                    />
                    <TextField
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        variant="outlined"
                        sx={{
                            width: "80%",
                            "& .MuiInputBase-root": {
                                color: "black",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "black",
                            },
                            "& .MuiInputLabel-root": {
                                color: "black",
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        sx={{
                            backgroundColor: "black",
                            color: "white",
                            width: "50%",
                            fontSize: "0.8rem",
                            padding: "8px 16px",
                            "&:hover": {
                                backgroundColor: "gray",
                            },
                        }}
                    >
                        Log In
                    </Button>

                    <Text
                        variant="body2"
                        sx={{
                            marginTop: 2,
                            color: "black",
                            fontSize:"0.9rem"
                        }}
                    >
                        Don't have an account?{" "}
                        <Link href="/register" sx={{ color: "blue" }}>
                            Register
                        </Link>
                    </Text>
                </Paper>
            </Box>
        </Box>
    );
}