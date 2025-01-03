"use client";

import { Button } from "@mui/material";
import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
const FilterButton: React.FC = ({}) => {
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
        padding: "10px",
        borderRadius: "40px",
        textTransform: "none",
        border: "1px solid black",
        "&:hover": {
          backgroundColor: "black",
          color: "white",
        },
      }}
    >
      <TuneIcon />
    </Button>
  );
};

export default FilterButton;
