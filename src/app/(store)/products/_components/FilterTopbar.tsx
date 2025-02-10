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
        p: 5,
        color: "black",
        ml: "auto",
        mr: "auto",
      }}
    >
      <Text variant={"h3"}>UNISEX CLOTHING COLLECTION</Text>
      <Text
        variant={"h6"}
        sx={{
          textAlign: "center",
          mt: 1,
          mb: 2,
          width: "40%",
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
