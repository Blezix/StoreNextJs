import { useState } from "react";
import { products } from "./data";
import SearchBar from "@/components/SearchBar";
import { filterProducts } from "@/lib/filterProducts";

const ProductPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilters = (filters) => {
    const result = filterProducts(products, filters);
    setFilteredProducts(result);
  };

  return (
    <div>
      <SearchBar onSearch={(query) => handleFilters({ searchQuery: query })} />
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

export default ProductPage;
