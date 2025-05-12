import mongoose, { Document, Schema } from 'mongoose';

interface Item {
    productId: string;
    quantity: number;
}

export interface ICart extends Document {
    userId: mongoose.Types.ObjectId;
    items: Item[];
}

const cartSchema = new Schema<ICart>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            productId: String,
            quantity: Number,
        },
    ],
});

export default mongoose.model<ICart>('Cart', cartSchema);
