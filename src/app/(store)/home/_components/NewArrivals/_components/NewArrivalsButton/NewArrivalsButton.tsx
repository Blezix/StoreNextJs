"use client";

import React from "react";
import UniversalButton from "@/app/_components/UniversalButton";

export default function NewArrivalsButton() {
  const handleClick = () => {
    // router.push("/products");
  };

  return (
    <UniversalButton variant={"black"} onClick={handleClick}>
      See all
    </UniversalButton>
  );
}
