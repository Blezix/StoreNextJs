"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

interface Product {
    ProductName: string;
    ProductPrice: number;
    imgSrc: string;
    quantity: number;
}

interface CartContextType {
    cartItems: Product[];
    totalItems: number;
    totalPrice: number;
    addToCart: (product: {
        ProductName: string;
        ProductPrice: number;
        imgSrc: string;
        sizes: string[];
        size: string;
        quantity: number
    }) => void;
    updateQuantity: (productName: string, quantity: number) => void;
    removeFromCart: (productName: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [totalItems, setTotalItems] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(cart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
        setTotalItems(cartItems.reduce((total, item) => total + item.quantity, 0));
        setTotalPrice(cartItems.reduce((total, item) => total + item.ProductPrice * item.quantity, 0));
    }, [cartItems]);

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.ProductName === product.ProductName);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.ProductName === product.ProductName
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                return [...prevItems, product];
            }
        });
    };

    const updateQuantity = (productName: string, quantity: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.ProductName === productName ? { ...item, quantity } : item
            )
        );
    };

    const removeFromCart = (productName: string) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.ProductName !== productName));
    };

    return (
        <CartContext.Provider value={{ cartItems, totalItems, totalPrice, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};