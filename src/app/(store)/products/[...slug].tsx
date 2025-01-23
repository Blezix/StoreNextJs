"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { products as productsData, Product } from "./data/products";
import Filters from "./_components/FilterOptions";
import SortOptions from "@/app/(store)/products/_components/SortOptions";
import ProductList from "./_components/ProductList";

const ProductFiltersPage = () => {
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>(productsData);

  const category = searchParams.get("category") || "";
  const priceRange = searchParams.get("priceRange") || "";
  const sort = searchParams.get("sort") || "";

  useEffect(() => {
    let filteredProducts = productsData;

    if (category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === category,
      );
    }
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
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
  }, [category, priceRange, sort]);

  return (
    <div>
      <Filters currentCategory={category} currentPriceRange={priceRange} />
      <SortOptions currentSort={sort} />
      <ProductList products={products} />
    </div>
  );
};

export default ProductFiltersPage;
