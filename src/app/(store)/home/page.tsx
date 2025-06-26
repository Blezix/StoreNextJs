"use client";

import React from "react";
import { Box } from "@mui/material";
import * as motion from "motion/react-client";
import HeroSection from "@/app/(store)/home/_components/HeroSection/HeroSection";
import NewArrivals from "@/app/(store)/home/_components/NewArrivals/NewArrivals";
import FeaturedCollections from "@/app/(store)/home/_components/FeaturedCollections/FeaturedCollections";
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Homepage() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
      >
        <NewArrivals />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        onViewportEnter={() => console.log("Entered viewport")}
        style={{
          height: "200px",
          backgroundColor: "lightblue",
          margin: "50px 0",
        }}
      >
        Test Section
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        onViewportEnter={() => console.log("Entered viewport")}
      >
        <FeaturedCollections />
      </motion.div>
    </Box>
  );
}
