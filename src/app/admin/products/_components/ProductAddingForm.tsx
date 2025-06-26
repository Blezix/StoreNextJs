"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Product } from "@/app/types";
import { useAdmin } from "@/app/admin/AdminContext";

const ProductAddingForm = () => {
  const { addProduct } = useAdmin();

  const [product, setProduct] = useState({
    name: "",
    price: 0,
    category: "",
    slug: "",
    imgSrc: [],
    sizes: [],
    colors: [],
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const handleArrayChange = (name: keyof Product, value: string) => {
    setProduct((prev) => ({
      ...prev,
      [name]: value.split(",").map((item) => item.trim()),
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const filePath = `/assets/${file.name}`;
      setProduct((prev) => {
        return {
          ...prev,
          imgSrc: [...prev.imgSrc, filePath],
        };
      });
      console.log(`File saved to: ${filePath}`); // Symulacja zapisu
    }
  };

  const handleRemoveImage = (index: number) => {
    setProduct((prev) => ({
      ...prev,
      imgSrc: prev.imgSrc.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addProduct(product);
    setProduct({
      name: "",
      price: 0,
      category: "",
      slug: "",
      imgSrc: [],
      sizes: [],
      colors: [],
      description: "",
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 600, mx: "auto", p: 2 }}
    >
      <Typography variant="h4" gutterBottom>
        Dodaj produkt
      </Typography>
      <TextField
        fullWidth
        label="Nazwa"
        name="name"
        value={product.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Cena"
        name="price"
        type="number"
        value={product.price}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Kategoria"
        name="category"
        value={product.category}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Slug"
        name="slug"
        value={product.slug}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Opis"
        name="description"
        value={product.description}
        onChange={handleChange}
        multiline
        rows={4}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Rozmiary (oddzielone przecinkami)"
        value={product.sizes.join(", ")}
        onChange={(e) => handleArrayChange("sizes", e.target.value)}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Kolory (oddzielone przecinkami)"
        value={product.colors.join(", ")}
        onChange={(e) => handleArrayChange("colors", e.target.value)}
        margin="normal"
        required
      />
      <Box sx={{ my: 2 }}>
        <Button variant="contained" component="label">
          Prześlij zdjęcie
          <input type="file" hidden onChange={handleFileUpload} />
        </Button>
        <List>
          {product.imgSrc.map((src, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton onClick={() => handleRemoveImage(index)}>
                  <Delete />
                </IconButton>
              }
            >
              {src}
            </ListItem>
          ))}
        </List>
      </Box>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Dodaj produkt
      </Button>
    </Box>
  );
};

export default ProductAddingForm;
