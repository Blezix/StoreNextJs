import { readData } from '@/utils/dataHandler';
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
