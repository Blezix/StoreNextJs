import React from "react";
import { Button } from "@mui/material";

interface ItemProps {
  value: string;
  onClick: void;
}

const Item: React.FC<ItemProps> = ({ value, onClick }) => {
  return (
    <Button
      variant="text"
      sx={{
        height: "20%",
        color: "white",
        borderRadius: "0",
        textTransform: "none",
        fontSize: "1rem",
        "&:hover": {
          opacity: "0.7",
        },
      }}
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default Item;
