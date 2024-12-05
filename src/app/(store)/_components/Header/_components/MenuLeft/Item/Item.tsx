import React from "react";
import { Button } from "@mui/material";

interface ItemProps {
  value: string;
}

const Item: React.FC<ItemProps> = ({ value }) => {
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
    >
      {value}
    </Button>
  );
};

export default Item;
