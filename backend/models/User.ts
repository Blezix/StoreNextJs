import mongoose, { Schema, Document } from 'mongoose';

interface CartItem {
    productId: mongoose.Types.ObjectId;
    quantity: number;
}

export interface IUser extends Document {
    email: string;
    passwordHash: string;
    cart: CartItem[];
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        passwordHash: { type: String, required: true },
        cart: [
            {
                productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
                quantity: { type: Number, required: true, min: 1 },
            },
        ],
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);
