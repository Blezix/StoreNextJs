"use client";

import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Product } from "@/app/types";
import ProductList from "./_components/ProductList";
import FadeIn from '@/app/_components/FadeIn';
const ProductFiltersPage = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const category = searchParams.get("category") || "";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const sort = searchParams.get("sort") || "";

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        let data: Product[] = await response.json();

        if (category) {
          data = data.filter((product) => product.category === category);
        }
        if (minPrice && maxPrice) {
          const min = Number(minPrice);
          const max = Number(maxPrice);
          data = data.filter((product) => product.price >= min && product.price <= max);
        }
        if (sort === "price-asc") {
          data.sort((a, b) => a.price - b.price);
        } else if (sort === "price-desc") {
          data.sort((a, b) => b.price - a.price);
        } else if (sort === "name-asc") {
          data.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sort === "name-desc") {
          data.sort((a, b) => b.name.localeCompare(a.name));
        }

        setProducts(data);
      } catch (error) {
        console.error("Błąd podczas pobierania produktów:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredProducts();
  }, [category, minPrice, maxPrice, sort]);

  if (loading) {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "20vh",
        color:'black',
        gap: 2,
    }}>
      Ładowanie produktów...
    </Box>;
  }

  return (
      <Box>
        <FadeIn blur={true} duration={150} easing="ease-out" initialOpacity={0} key={`${pathname}-${category}`}>
          <ProductList products={products} />
        </FadeIn>
      </Box>
  );
};

export default ProductFiltersPage;