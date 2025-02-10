"use client";
import React from "react";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Text from "@/app/_components/Text";

import UniversalButton from "@/app/_components/UniversalButton";
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
        <Text
          variant={"h3"}
          sx={{
            transition: "opacity 0.5s",
          }}
        >
          {CategoryName}
        </Text>

        <Text
          variant={"h6"}
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
        </Text>

          <UniversalButton
              variant={"white"}
              onClick={handleRedirect}
              sx={{
                  width: active ? "200px" : "0",
                  fontSize: active ? "inherit" : "0",
                  opacity: active ? 1 : 0,

              }}
          >
              Discover
          </UniversalButton>
      </Box>
    </Box>
  );
};

export default ShordCard;
