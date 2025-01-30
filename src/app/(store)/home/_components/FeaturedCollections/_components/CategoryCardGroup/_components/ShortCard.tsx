"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  CategoryName: string;
  CategoryDesc: string;
  imgSrc: string;
}

const ShordCard: React.FC<Props> = ({ CategoryName, imgSrc, CategoryDesc }) => {
  const [active, setActive] = React.useState(false);
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/products?category=${CategoryName}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "40%",
        borderRadius: "10px",
        m: 2,
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "400ms all",
        "&:hover": {
          height: "60%",
        },
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backdropFilter: "grayscale(1) brightness(0.8)",
          borderRadius: "10px",
          transition: "300ms all",

          "&:hover": {
            cursor: "pointer",
            backdropFilter: "grayscale(0.2) brightness(0.9)",
          },
        }}
      >
        <Typography
          variant={"h3"}
          sx={{
            transition: "opacity 0.5s",
          }}
        >
          {CategoryName}
        </Typography>

        <Typography
          variant={"h5"}
          sx={{
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            textAlign: "center",
            p: 2,
            fontSize: active ? "auto" : "0",
            opacity: active ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        >
          {CategoryDesc}
        </Typography>

        <Button
          sx={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 0",
            width: active ? "200px" : "0",
            borderRadius: "30px",
            fontSize: active ? "1.2rem" : "0",
            textTransform: "none",
            opacity: active ? 1 : 0,
            mb: 7,
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
          }}
          onClick={handleRedirect}
        >
          Discover
        </Button>
      </Box>
    </Box>
  );
};

export default ShordCard;
