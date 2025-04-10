import React from "react";
import Box from "@mui/material/Box";
import Text from "@/app/_components/Text";
import { useRouter } from "next/navigation";



export default function Logo() {
    const router = useRouter();

    function HandlePageRedirect(value: string) {
        router.push(`/${value}`);
    }

    return (
        <Box
            sx={{
                width: "70%",
                height: "100%",
                color: "inherit",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bold",
                "&:hover": {
                    opacity: "0.7",
                    cursor: "pointer",
                },
            }}
            onClick={() => HandlePageRedirect("/")}
        >
            <Text
                variant={"h2"}
                sx={{
                    fontWeight: "bold",
                }}
            >
                Logo
            </Text>
        </Box>
    );
}