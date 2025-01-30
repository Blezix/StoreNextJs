"use client";

import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  value: string;
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
}

const CategoryButton: React.FC<Props> = ({
  value,
  isClicked,
  setIsClicked,
}) => {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("category") === value) {
      setIsClicked(true);
    }
  }, [value, setIsClicked]);

  const handleCategoryChange = () => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }
    router.push(`/products?${params.toString()}`);
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
      }}
      onClick={handleCategoryChange}
    >
      {value}
    </Button>
  );
};

export default CategoryButton;
