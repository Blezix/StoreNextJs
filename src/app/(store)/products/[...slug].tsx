"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { products as productsData, Product } from "./data/products";
import ProductList from "./_components/ProductList";
import FadeIn from '@/app/_components/FadeIn';

const ProductFiltersPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [products, setProducts] = useState<Product[]>(productsData);

  const category = searchParams.get("category") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const sort = searchParams.get("sort") || "";

  useEffect(() => {
    let filteredProducts = productsData;

    if (category) {
      filteredProducts = filteredProducts.filter(
          (product) => product.category === category,
      );
    }
    if (minPrice && maxPrice) {
      const min = Number(minPrice);
      const max = Number(maxPrice);
      filteredProducts = filteredProducts.filter(
          (product) => product.price >= min && product.price <= max,
      );
    }
    if (sort === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "name-asc") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "name-desc") {
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    setProducts(filteredProducts);
  }, [category, minPrice, maxPrice, sort]);

  return (
      <Box>
        <FadeIn blur={true} duration={150} easing="ease-out" initialOpacity={0} key={`${pathname}-${category}`}>
          <ProductList products={products} />
        </FadeIn>
      </Box>
  );
};

export default ProductFiltersPage;