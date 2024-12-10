"use client";
import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface Props {
  CategoryName: string;
  CategoryDesc: string;
  imgSrc: string;
}

const LongCard: React.FC<Props> = ({ CategoryName, imgSrc, CategoryDesc }) => {
  const [active, setActive] = React.useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        filter: "grayscale(1)",
        height: "60%",
        borderRadius: "10px",
        m: 2,
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transiton: "200ms all",
        "&:hover": {
          cursor: "pointer",
          filter: "grayscale(0.2)",
          p: 1,
        },
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {active ? (
        <>
          <Typography variant={"h3"}>{CategoryName}</Typography>

          <Typography
            variant={"h5"}
            sx={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              textAlign: "center",
              p: 2,
            }}
          >
            {CategoryDesc}
          </Typography>
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              padding: "10px 0",
              width: "200px",
              borderRadius: "30px",
              fontSize: "1.2rem",
              textTransform: "none",
              mb: 7,
              "&:hover": {
                backgroundColor: "black",
                color: "white",
              },
            }}
          >
            Discover
          </Button>
        </>
      ) : (
        <Typography variant={"h3"}>{CategoryName}</Typography>
      )}
    </Box>
  );
};

export default LongCard;
