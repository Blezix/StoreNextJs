import React from "react";
import { useRouter } from "next/router";
interface Props {
  currentSort: (option: string) => void;
}

const SortOptions: React.FC<Props> = ({ currentSort }) => {
  const router = useRouter();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value;
    const slug = [...(router.query.slug || [])];
    slug[2] = sort || "undefined";
    router.push(`/products/${slug.join("/")}`);
  };

  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A-Z</option>
        <option value="name-desc">Name: Z-A</option>
      </select>
    </div>
  );
};

export default SortOptions;
