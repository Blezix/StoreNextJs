import { readData,writeData } from '@/utils/dataHandler';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const products = await readData('products.json');

        return NextResponse.json(products);
    } catch (error) {
        console.error('Error reading products.json:', error);
        return new NextResponse('Failed to load products', { status: 500 });
    }
}
export async function POST(request: Request) {
    try {
        const newProduct = await request.json();
        const products = await readData('products.json');

        products.push(newProduct);
        await writeData('products.json', products);

        return NextResponse.json({ message: 'Product added successfully' });
    } catch (error) {
        console.error('Error adding product:', error);
        return new NextResponse('Failed to add product', { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        const products = await readData('products.json');

        const updatedProducts = products.filter((product: { id: number }) => product.id !== id);
        await writeData('products.json', updatedProducts);

        return NextResponse.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        return new NextResponse('Failed to delete product', { status: 500 });
    }
}