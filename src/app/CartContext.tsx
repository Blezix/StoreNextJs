"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "./UserContext";
import { CartItem } from "./types";

type CartContextType = {
    cartItems: CartItem[];
    totalItems: number;
    totalPrice: number;
    fetchCart: () => void;
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCartContext must be used within CartProvider");
    return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const { user } = useUser();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Fetch cart from backend
    const fetchCart = async () => {
        if (!user?.id) return;

        try {
            const [cartRes, summaryRes] = await Promise.all([
                fetch(`http://localhost:5000/api/cart/${user.id}`),
                fetch(`http://localhost:5000/api/cart/${user.id}/summary`),
            ]);

            const cartData = await cartRes.json();
            const summaryData = await summaryRes.json();

            setCartItems(cartData.items);
            setTotalItems(summaryData.totalItems);
            setTotalPrice(summaryData.totalPrice);
        } catch (err) {
            console.error("Błąd pobierania koszyka:", err);
        }
    };

    const addToCart = async (item: CartItem) => {
        if (!user?.id) return;
        try {
            await fetch(`http://localhost:5000/api/cart/${user.id}/add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(item),
            });
            fetchCart();
        } catch (err) {
            console.error("Błąd dodawania do koszyka:", err);
        }
    };

    const removeFromCart = async (productId: string) => {
        if (!user?.id) return;
        try {
            await fetch(`http://localhost:5000/api/cart/${user.id}/remove/${productId}`, {
                method: "DELETE",
            });
            fetchCart();
        } catch (err) {
            console.error("Błąd usuwania z koszyka:", err);
        }
    };

    const clearCart = () => {
        setCartItems([]);
        setTotalItems(0);
        setTotalPrice(0);
    };

    useEffect(() => {
        if (user?.id) {
            fetchCart();
        } else {
            clearCart();
        }
    }, [user]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                totalItems,
                totalPrice,
                fetchCart,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
