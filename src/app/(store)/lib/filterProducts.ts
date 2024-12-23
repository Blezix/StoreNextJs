export const filterProducts = (
  products: any[],
  filters: { category?: string; price?: string; sort?: string },
) => {
  let result = [...products]; // Copy the products array to avoid mutating the original

  if (filters.category) {
    result = result.filter((product) => product.category === filters.category);
  }

  if (filters.price) {
    if (filters.price === "low-high") {
      result = result.sort((a, b) => a.ProductPrice - b.ProductPrice);
    } else if (filters.price === "high-low") {
      result = result.sort((a, b) => b.ProductPrice - a.ProductPrice);
    }
  }

  if (filters.sort === "popularity") {
    result = result.sort((a, b) => b.popularity - a.popularity);
  }

  return result;
};
