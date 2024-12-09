import React from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  CategoryName: string;
  imgSrc: string;
}

const LongCard: React.FC<Props> = ({ CategoryName, imgSrc }) => {
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
        transition: "200ms all",
        "&:hover": {
          filter: "grayscale(0)",
          p: 1,
        },
      }}
    >
      <Typography variant={"h3"}>{CategoryName}</Typography>
    </Box>
  );
};

export default LongCard;
