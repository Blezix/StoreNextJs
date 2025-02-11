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
    imgSrc: "/Assets/jacketRed.png",
    category: "Jackets",
  },
  {
    id: 2,
    name: "Trail Running Shoes",
    price: 129.99,
    imgSrc: "/Assets/Boots.png",
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
    imgSrc: "/Assets/bombaclat.png",
    category: "Accessories",
  },
  {
    id: 5,
    name: "Camping Hat",
    price: 24.99,
    imgSrc: "/Assets/beany.png",
    category: "Headwear",
  },
  {
    id: 6,
    name: "Fleece Pullover",
    price: 49.99,
    imgSrc: "/Assets/Bluzaichuj.png",
    category: "Jackets",
  },
  {
    id: 7,
    name: "Windbreaker",
    price: 89.99,
    imgSrc: "/Assets/jacketBlack.png",
    category: "Jackets",
  },
  {
    id: 8,
    name: "Backpacking Boots",
    price: 149.99,
    imgSrc: "/Assets/Boots.png",
    category: "Footwear",
  },
  // New random products
  {
    id: 9,
    name: "Mountain Bike Helmet",
    price: 59.99,
    imgSrc: "/Assets/bombaclat.png",
    category: "Accessories",
  },
  {
    id: 10,
    name: "Climbing Rope",
    price: 89.99,
    imgSrc: "/Assets/bombaclat.png",
    category: "Accessories",
  },
  {
    id: 11,
    name: "Insulated Jacket",
    price: 99.99,
    imgSrc: "/Assets/jacketRed.png",
    category: "Jackets",
  },
  {
    id: 12,
    name: "Hiking Boots",
    price: 139.99,
    imgSrc: "/Assets/Boots.png",
    category: "Footwear",
  },
  {
    id: 13,
    name: "Camping Tent",
    price: 199.99,
    imgSrc: "/Assets/bombaclat.png",
    category: "Accessories",
  },
  {
    id: 14,
    name: "Sleeping Bag",
    price: 79.99,
    imgSrc: "/Assets/bombaclat.png",
    category: "Accessories",
  },
  {
    id: 15,
    name: "Hiking Socks",
    price: 14.99,
    imgSrc: "/Assets/Bluzaichuj.png",
    category: "Footwear",
  },
];