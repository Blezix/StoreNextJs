"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { products as productsData, Product } from "./data/products";
import ProductList from "./_components/ProductList";

const ProductFiltersPage = () => {
  const searchParams = useSearchParams();

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
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductFiltersPage;
