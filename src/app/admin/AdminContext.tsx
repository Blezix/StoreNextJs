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
  deleteProduct: (slug: string ) => void;
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

  const addProduct = async (product: any) => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      const newProduct = await response.json();
      setProducts((prev) => [...prev, newProduct]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const deleteProduct = async (slug: string) => {
    try {
      const response = await fetch("/api/products", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setProducts((prev) => prev.filter((product) => product.slug !== slug));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <AdminContext.Provider
      value={{
        users,
        products,
        loggedInUser,
        setLoggedInUser,
        addUser,
        deleteUser,
        addProduct,
        deleteProduct,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useAdmin must be used within AdminProvider");
  return context;
};
