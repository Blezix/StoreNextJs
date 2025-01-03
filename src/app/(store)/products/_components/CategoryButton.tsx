"use client";

import { Button } from "@mui/material";
import React from "react";

interface Props {
  value: string;
}

const CategoryButton: React.FC<Props> = ({ value }) => {
  const [isClicked] = React.useState(false);

  /*useEffect(() => {
    console.log("Button clicked");
  }[])
*/
  return (
    <Button
      sx={{
        backgroundColor: isClicked ? "black" : "white",
        color: isClicked ? "white" : "black",
        padding: "10px 10px",
        borderRadius: "30px",
        textTransform: "none",
        border: "1px solid black",
        "&:hover": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      {value}
    </Button>
  );
};

export default CategoryButton;
