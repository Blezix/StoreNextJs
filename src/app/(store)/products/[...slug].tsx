"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "./data"; // Assuming data is in the same folder
import { filterProducts } from "../lib/filterProducts";

const ProductFiltersPage = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug")?.split("&"); // e.g., "electronics,low-high,popularity"

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (slug) {
      const [category, price, sort] = slug;
      const filters = { category, price, sort };
      const result = filterProducts(products, filters);
      setFilteredProducts(result);
      console.log(result);
    }
  }, []);

  return (
    <div>
      <h1>Filtered Products</h1>
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductFiltersPage;
