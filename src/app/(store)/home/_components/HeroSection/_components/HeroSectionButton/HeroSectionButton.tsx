"use client";

import React from "react";
import UniversalButton from "@/app/_components/UniversalButton";
import { useRouter } from "next/navigation";
export default function HeroSectionButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products");
  };

  return (
      <>
          <UniversalButton variant={"white"} onClick={handleClick}>Shop Now</UniversalButton>
      </>

  );
}
