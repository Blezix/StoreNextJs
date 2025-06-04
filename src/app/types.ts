export interface Product {
    id: number;
    color: string;
    size: string    ;
    name: string;
    price: number;
    category: string;
    slug: string;
    imgSrc: string[];
    quantity: number;
    sizes: string[];
    colors: string[];
    description: string;

}

export interface User {
    email: string;
    password: string;

}

export interface CartItem {
    slug: string;
    size: string;
    color: string;
    quantity: number;
}

export interface CartListItemProps {
    item: CartItem;
    product: Product | undefined;
    index: number;
    handleQuantityChange: (index: number, quantity: number) => void;
    handleDelete: (index: number) => void;
}