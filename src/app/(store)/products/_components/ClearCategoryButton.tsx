"use client";

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Text from "../../../_components/Text";
import { useSearchParams } from "next/navigation";

const ClearCategoryButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = searchParams.get("category");

    if (params !== null) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }

    console.log(params);
  }, [searchParams]);

  const handleClearCategory = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete("category");
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
    setIsClicked(true);
  };

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
        minWidth: `10ch`,
      }}
      onClick={handleClearCategory}
    >
      <Text variant={"body2"}>All</Text>
    </Button>
  );
};

export default ClearCategoryButton;
