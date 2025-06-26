import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";

const CategoryData = [
  { id: "jackets", label: "Jackets", link: "/products?category=Jackets" },
  { id: "headwear", label: "Headwear", link: "/products?category=Headwear" },
  { id: "footwear", label: "Footwear", link: "/products?category=Footwear" },
  { id: "Bags", label: "Bags", link: "/products?category=Bags" },
  { id: "bottoms", label: "Bottoms", link: "/products?category=Bottoms" },
  {
    id: "accessories",
    label: "Accessories",
    link: "/products?category=Accessories",
  },
];

const CollapsibleItem = () => {
  const router = useRouter();

  const handleRedirect = (link: string) => {
    router.push(link);
    console.log(link);
  };

  return (
    <Box
      sx={{
        fontSize: {
          xs: "2.5rem",
          sm: "2.5rem",
          md: "2rem",
        },
      }}
    >
      <SimpleTreeView>
        <TreeItem
          slotProps={{
            content: {
              style: {
                display: "flex",
                flexDirection: "row-reverse",
                background: "none",
              },
            },
            label: {
              style: {
                fontSize: "inherit",
              },
            },
          }}
          itemId={"Products"}
          label={"Products"}
        >
          {CategoryData.map((category) => (
            <TreeItem
              key={category.id}
              itemId={category.id}
              label={category.label}
              onClick={() => handleRedirect(category.link)}
            />
          ))}
        </TreeItem>
      </SimpleTreeView>
    </Box>
  );
};

export default CollapsibleItem;
