import type { Metadata } from 'next';
import './globals.css';
import Header from './(store)/_components/Header/Header';
import Footer from './(store)/_components/Footer/Footer';
import { CartProvider } from '@/app/CartContext';
import FadeIn from './_components/FadeIn';
export const metadata: Metadata = {
    title: 'Nigger Sport',
    description: 'Generated by create next app',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <CartProvider>
                <Header />
                <FadeIn blur={true} duration={150} easing="ease-out" initialOpacity={0}>{children}</FadeIn>
                <Footer />

        </CartProvider>
        </body>
        </html>
    );
}