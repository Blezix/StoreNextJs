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
          fontSize: "1.1rem",
        "&:hover": {
          opacity: "0.7",
        },
      }}
      onClick={onClick}
    >
      <Text variant={"body2"}>{value}</Text>
    </Button>
  );
};

export default Item;
