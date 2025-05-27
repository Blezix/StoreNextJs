export interface CartItem {
    productId: string;
    quantity: number;
    color?: string;
    size?: string;
    slug?: string;
    product?: {
        name: string;
        price: number;
        image: string;
    };
}

export interface Product {
    id: string;
    name: string;
    price: number;
    imgSrc: string[];
    category: string;
    slug: string;
    description: string;
    sizes: string[];
    colors: string[];
}
