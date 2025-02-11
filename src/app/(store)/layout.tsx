import React from 'react';
import Header from './_components/Header/Header';
import Footer from './_components/Footer/Footer';
import { CartProvider } from "@/app/CartContext";
export default function StoreLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <CartProvider>
        <Header/>
    <div> {children}</div>
        <Footer/>
            </CartProvider>
            </>

    );
}