export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

export const products: Product[] = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 699 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 20 },
  { id: 4, name: "Jeans", category: "Clothing", price: 40 },
  { id: 5, name: "Headphones", category: "Electronics", price: 199 },
];
