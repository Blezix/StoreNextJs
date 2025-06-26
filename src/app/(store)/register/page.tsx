"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  Button,
  Box,
  Paper,
  Link,
  CircularProgress,
} from "@mui/material";
import Text from "@/app/_components/Text";
import CustomSnackbar from "@/app/_components/CustomSnackbar"; // Import the custom snackbar component
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role] = useState("user");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("All fields are required");
      setFailed(true);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setError("");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
        setMessage(data.message || "Registration successful");
      } else {
        setFailed(true);
        setMessage("Something went wrong");
      }
    } catch {
      setError("Server error");
    } finally {
      setIsLoading(false);
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
          {isLoading ? (
              <CircularProgress sx={{color:"black"}}/>
          ) : (
            <>
              <Text
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  marginBottom: 2,
                }}
              >
                Register
              </Text>

              {error && (
                <Text
                  variant="body2"
                  sx={{
                    color: "red",
                    marginTop: 1,
                  }}
                >
                  {error}
                </Text>
              )}

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
                onClick={handleSubmit}
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
                Register
              </Button>

              <Text
                variant="body2"
                sx={{
                  marginTop: 2,
                  color: "black",
                  fontSize: "0.9rem",
                }}
              >
                Already have an account?{" "}
                <Link href="/login" sx={{ color: "blue" }}>
                  Log In
                </Link>
              </Text>
            </>
          )}
        </Paper>
      </Box>
      <CustomSnackbar
        message={message}
        variant={"succes"}
        onClose={() => setSuccess(false)}
        open={success}
      />
      <CustomSnackbar
        message={message}
        variant={"error"}
        onClose={() => setFailed(false)}
        open={failed}
      />
    </Box>
  );
};

export default RegisterForm;
