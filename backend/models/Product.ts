import mongoose, { Schema, Document } from 'mongoose';

// Define the Product interface
export interface Product extends Document {
        id: number;
        name: string;
        price: number;
        imgSrc: string[];
        category: string;
        slug: string;
        description: string;
        sizes: string[];
        colors: string[];
}

// Define the schema for the product
const productSchema = new Schema<Product>({
        id: { type: Number, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        imgSrc: { type: [String], required: true },
        category: { type: String, required: true },
        slug: { type: String, required: true },
        description: { type: String, required: true },
        sizes: { type: [String], required: true },
        colors: { type: [String], required: true },
});

// Create the Product model
const ProductModel = mongoose.model<Product>('Product', productSchema);

export default ProductModel;
