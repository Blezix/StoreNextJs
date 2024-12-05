import React from "react";
import { List, ListItem, Typography } from "@mui/material";

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
      <Typography variant={"h6"}>{header}</Typography>
      {items.map((item, index) => (
        <ListItem
          key={index}
          sx={{
            pl: 0,
          }}
        >
          <Typography
            sx={{
              color: "#6b6b6b",
            }}
          >
            {item}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
}
