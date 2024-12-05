import React from 'react';
import Header from './_components/Header/Header';
import Footer from './_components/Footer/Footer';

export default function StoreLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Header/>
    <div> {children}</div>
        <Footer/>
        </>

    );
}