import React from "react";
import { List, ListItem } from "@mui/material";
import Text from "@/app/_components/Text";
interface FooterListProps {
  header: string;
  items: string[];
}

export default function FooterList({ header, items }: FooterListProps) {
  return (
    <List
      sx={{
        height: "100%",
        width: "30%",
      }}
    >
      <Text variant={"h6"}>{header}</Text>
      {items.map((item, index) => (
        <ListItem
          key={index}
          sx={{
            pl: 0,
          }}
        >
          <Text
            variant={"body2"}
            sx={{
              color: "#6b6b6b",
            }}
          >
            {item}
          </Text>
        </ListItem>
      ))}
    </List>
  );
}
