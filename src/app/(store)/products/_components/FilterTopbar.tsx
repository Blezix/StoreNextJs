import { Box } from "@mui/material";
import Text from "@/app/_components/Text";
import CategoryBar from "./CategoryBar";
export default function FilterTopbar() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "95%",
        height: "250px",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
        p: {
            xs: 2, // For extra-small screens
            sm: 3, // For small screens
            md: 4, // For medium screens
            lg: 5, // For large screens
        },
        color: "black",
        ml: "auto",
        mr: "auto",
      }}
    >
      <Text variant={"h3"} sx={{
          textAlign:"center"
      }}>UNISEX CLOTHING COLLECTION</Text>
      <Text
        variant={"h6"}
        sx={{
          textAlign: "center",
          mt: 1,
          mb: 2,
            width: {
                xs: "90%", // For extra-small screens
                sm: "70%", // For small screens
                md: "50%", // For medium screens
                lg: "40%", // For large screens
            },
          color: "#818181",
        }}
      >
        Find everything you need to look and feel your best and shop the latest
        unisex outdoor products
      </Text>
      <CategoryBar />
    </Box>
  );
}
