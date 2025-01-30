export interface Product {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hiking Jacket",
    price: 79.99,
    imgSrc: "/Assets/BaigePuffer.png",
    category: "Jackets",
  },
  {
    id: 2,
    name: "Trail Running Shoes",
    price: 129.99,
    imgSrc: "/Assets/BaigePuffer.png",
    category: "Footwear",
  },
  {
    id: 3,
    name: "Waterproof Pants",
    price: 59.99,
    imgSrc: "/Assets/BaigePuffer.png",
    category: "Bottoms",
  },
  {
    id: 4,
    name: "Thermal Gloves",
    price: 19.99,
    imgSrc: "/Assets/BaigePuffer.png",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Camping Hat",
    price: 24.99,
    imgSrc: "/Assets/BaigePuffer.png",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Fleece Pullover",
    price: 49.99,
    imgSrc: "/Assets/BaigePuffer.png",
    category: "Jackets",
  },
  {
    id: 7,
    name: "Windbreaker",
    price: 89.99,
    imgSrc: "/Assets/BaigePuffer.png",
    category: "Jackets",
  },
  {
    id: 8,
    name: "Backpacking Boots",
    price: 149.99,
    imgSrc: "/Assets/BaigePuffer.png",
    category: "Footwear",
  },
];
