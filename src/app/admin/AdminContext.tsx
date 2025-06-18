"use client";

import React, { createContext, useContext, useState } from "react";

interface AdminContextType {
    users: any[];
    products: any[];
    loggedInUser: any | null;
    setLoggedInUser: (user: any) => void;
    addUser: (user: any) => void;
    deleteUser: (id: number) => void;
    addProduct: (product: any) => void;
    deleteProduct: (id: number) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);
    const [loggedInUser, setLoggedInUser] = useState<any | null>(null);

    const addUser = (user: any) => {
        setUsers((prev) => [...prev, user]);
    };

    const deleteUser = (id: number) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    const addProduct = (product: any) => {
        setProducts((prev) => [...prev, product]);
    };

    const deleteProduct = (id: number) => {
        setProducts((prev) => prev.filter((product) => product.id !== id));
    };

    return (
        <AdminContext.Provider value={{ users, products, loggedInUser, setLoggedInUser, addUser, deleteUser, addProduct, deleteProduct }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = (): AdminContextType => {
    const context = useContext(AdminContext);
    if (!context) throw new Error("useAdmin must be used within AdminProvider");
    return context;
};