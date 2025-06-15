"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {CartItem} from "@/app/types";
import products from "@/data/products.json";
interface CartContextType {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (slug: string, size?: string, color?: string) => void;
    updateQuantity: (slug: string, quantity: number, size?: string, color?: string) => void;
    totalPrice: number;

}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const totalPrice = cartItems.reduce((total, item) => {


        const product = products.find((p:any) => p.slug === item.slug);
        if (product) {
            return total + product.price * item.quantity;
        }
        return total;
    }, 0);
    const getUserEmail = () => {
        if (typeof window !== "undefined") {
            const user = localStorage.getItem("loggedInUser");
            if (user) {
                try {
                    return JSON.parse(user).email;
                } catch {
                    return null;
                }
            }
        }
        return null;
    };

    const syncCartWithServer = async (email: string, items: CartItem[]) => {
        console.log("syncCartWithServer called with:", { email, items });
        try {
            const response = await fetch("/api/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, items }),
            });

            if (!response.ok) {
                throw new Error("Failed to sync cart with server");
            }

            console.log("Cart synced successfully with server");
        } catch (error) {
            console.error("Error syncing cart with server:", error);
        }
    };
    const loadCart = () => {
        const email = getUserEmail();
        const stored = localStorage.getItem(`cart-${email}`);
        if (stored) {
            setCartItems(JSON.parse(stored));
        }
    };

    const saveCart = (updatedCart: CartItem[]) => {
        const email = getUserEmail();
        if (!email) {
            console.warn("Brak e-maila, nie można zapisać koszyka.");
            return;
        }
        try {
            localStorage.setItem(`cart-${email}`, JSON.stringify(updatedCart));
            console.log("Koszyk zapisany w localStorage:", updatedCart);
        } catch (error) {
            console.error("Błąd podczas zapisywania koszyka w localStorage:", error);
        }
    };

    useEffect(() => {
        loadCart();
    }, []);
    const addToCart = async (newItem: CartItem) => {
        console.log("addToCart called with:", newItem);

        let updatedCart: CartItem[] = [];
        setCartItems((prev) => {
            updatedCart = prev.map((item) =>
                item.slug === newItem.slug &&
                item.size === newItem.size &&
                item.color === newItem.color
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            const isItemInCart = prev.some(
                (item) =>
                    item.slug === newItem.slug &&
                    item.size === newItem.size &&
                    item.color === newItem.color
            );

            if (!isItemInCart) {
                updatedCart.push({ ...newItem, quantity: 1 });
            }

            saveCart(updatedCart);
            return updatedCart;
        });

        const email = getUserEmail();
        if (email) {
            try {
                await syncCartWithServer(email, updatedCart);
            } catch (error) {
                console.error("Error syncing cart with server:", error);
            }
        }
    };

    const removeFromCart = (slug: string, size?: string, color?: string) => {
        setCartItems((prev) => {
            const updatedCart = prev.filter(
                (item) =>
                    !(item.slug === slug && item.size === size && item.color === color)
            );
            saveCart(updatedCart);
            const email = getUserEmail();
            if (email) {
                syncCartWithServer(email, updatedCart);
            }
            return updatedCart;
        });
    };

    const updateQuantity = (
        slug: string,
        quantity: number,
        size?: string,
        color?: string
    ) => {
        console.log("updateQuantity called with:", { slug, quantity, size, color });
        setCartItems((prev) => {
            const updatedCart = prev.map((item) =>
                item.slug === slug && item.size === size && item.color === color
                    ? { ...item, quantity }
                    : item
            );
            saveCart(updatedCart);
            const email = getUserEmail();
            if (email) {
                syncCartWithServer(email, updatedCart);
            }
            return updatedCart;
        });
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity,totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};
