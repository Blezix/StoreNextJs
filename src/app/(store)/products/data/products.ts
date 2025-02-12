export interface Product {
  id: number;
  name: string;
  price: number;
  imgSrc: string[];
  category: string;
  slug: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Hiking Jacket",
    price: 79.99,
    imgSrc: ["/Assets/jacketRed.png", "/Assets/jacketRed.png", "/Assets/jacketRed.png"],
    category: "Jackets",
    slug: "hiking-jacket",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"]
  },
  {
    id: 2,
    name: "Trail Running Shoes",
    price: 129.99,
    imgSrc: ["/Assets/Boots.png", "/Assets/Boots.png", "/Assets/Boots.png"],
    category: "Footwear",
    slug: "trail-running-shoes",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["8", "9", "10", "11"],
    colors: ["Black", "White"]
  },
  {
    id: 3,
    name: "Waterproof Pants",
    price: 59.99,
    imgSrc: ["/Assets/BaigePuffer.png", "/Assets/BaigePuffer.png", "/Assets/BaigePuffer.png"],
    category: "Bottoms",
    slug: "waterproof-pants",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Black"]
  },
  {
    id: 4,
    name: "Thermal Gloves",
    price: 19.99,
    imgSrc: ["/Assets/bombaclat.png", "/Assets/bombaclat.png", "/Assets/bombaclat.png"],
    category: "Accessories",
    slug: "thermal-gloves",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Gray"]
  },
  {
    id: 5,
    name: "Camping Hat",
    price: 24.99,
    imgSrc: ["/Assets/beany.png", "/Assets/beany.png", "/Assets/beany.png"],
    category: "Headwear",
    slug: "camping-hat",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["One Size"],
    colors: ["Green", "Brown"]
  },
  {
    id: 6,
    name: "Fleece Pullover",
    price: 49.99,
    imgSrc: ["/Assets/Bluzaichuj.png", "/Assets/Bluzaichuj.png", "/Assets/Bluzaichuj.png"],
    category: "Jackets",
    slug: "fleece-pullover",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Gray"]
  },
  {
    id: 7,
    name: "Windbreaker",
    price: 89.99,
    imgSrc: ["/Assets/jacketBlack.png", "/Assets/jacketBlack.png", "/Assets/jacketBlack.png"],
    category: "Jackets",
    slug: "windbreaker",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"]
  },
  {
    id: 8,
    name: "Backpacking Boots",
    price: 149.99,
    imgSrc: ["/Assets/Boots.png", "/Assets/Boots.png", "/Assets/Boots.png"],
    category: "Footwear",
    slug: "backpacking-boots",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["8", "9", "10", "11"],
    colors: ["Brown", "Black"]
  },
  {
    id: 9,
    name: "Mountain Bike Helmet",
    price: 59.99,
    imgSrc: ["/Assets/bombaclat.png", "/Assets/bombaclat.png", "/Assets/bombaclat.png"],
    category: "Accessories",
    slug: "mountain-bike-helmet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["M", "L"],
    colors: ["Red", "Blue"]
  },
  {
    id: 10,
    name: "Climbing Rope",
    price: 89.99,
    imgSrc: ["/Assets/bombaclat.png", "/Assets/bombaclat.png", "/Assets/bombaclat.png"],
    category: "Accessories",
    slug: "climbing-rope",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["30m", "50m"],
    colors: ["Green", "Yellow"]
  },
  {
    id: 11,
    name: "Insulated Jacket",
    price: 99.99,
    imgSrc: ["/Assets/jacketRed.png", "/Assets/jacketRed.png", "/Assets/jacketRed.png"],
    category: "Jackets",
    slug: "insulated-jacket",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"]
  },
  {
    id: 12,
    name: "Hiking Boots",
    price: 139.99,
    imgSrc: ["/Assets/Boots.png", "/Assets/Boots.png", "/Assets/Boots.png"],
    category: "Footwear",
    slug: "hiking-boots",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["8", "9", "10", "11"],
    colors: ["Brown", "Gray"]
  },
  {
    id: 13,
    name: "Camping Tent",
    price: 199.99,
    imgSrc: ["/Assets/bombaclat.png", "/Assets/bombaclat.png", "/Assets/bombaclat.png"],
    category: "Accessories",
    slug: "camping-tent",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["2-person", "4-person"],
    colors: ["Green", "Blue"]
  },
  {
    id: 14,
    name: "Sleeping Bag",
    price: 79.99,
    imgSrc: ["/Assets/bombaclat.png", "/Assets/bombaclat.png", "/Assets/bombaclat.png"],
    category: "Accessories",
    slug: "sleeping-bag",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["Regular", "Long"],
    colors: ["Blue", "Gray"]
  },
  {
    id: 15,
    name: "Hiking Socks",
    price: 14.99,
    imgSrc: ["/Assets/Bluzaichuj.png", "/Assets/Bluzaichuj.png", "/Assets/Bluzaichuj.png"],
    category: "Footwear",
    slug: "hiking-socks",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Black"]
  },
];