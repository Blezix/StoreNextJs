import React from "react";
import { Button } from "@mui/material";
import Text from "@/app/_components/Text";

interface ItemProps {
  value: string;
  onClick: () => void;
}

const Item: React.FC<ItemProps> = ({ value, onClick }) => {
  return (
    <Button
      variant="text"
      sx={{
        height: "20%",
        color: "inherit",
        borderRadius: "0",
        textTransform: "none",
        fontSize: {
          xs: "2.5rem", // Small screens
          sm: "2.5rem", // Medium screens
          md: "2rem", // Larger screens
        },
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          ml: "5px",
        },
      }}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default Item;
