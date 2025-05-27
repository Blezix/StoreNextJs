import { Request, Response } from 'express';
import Cart from '../models/Cart';

export const getCart = async (req: Request, res: Response): Promise<void> => {
//pobieranie working
    const userId = req.params.userId;

    try {
        const cart = await Cart.findOne({ userId }).populate('items.productId');
        if (!cart) {
            res.status(404).json({ message: 'Koszyk nie został znaleziony' });
            return;
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Błąd serwera', error });
    }
};

export const addToCart = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
        return res.status(400).json({ message: "productId i quantity są wymagane." });
    }

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items: [] });
        }

        const existingItem = cart.items.find((item: { productId: string; quantity: number }) => item.productId.toString() === productId);        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        return res.status(200).json(cart);
    } catch (error) {
        return res.status(500).json({ message: "Błąd serwera.", error });
    }
};
export const updateCart = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;
    const { items } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = new Cart({ userId, items });
        } else {
            cart.items = items;
        }

        await cart.save();
        res.status(200).json({ message: 'Koszyk zaktualizowany pomyślnie', cart });
    } catch (error) {
        res.status(500).json({ message: 'Błąd serwera', error });
    }
};

// Usuń koszyk użytkownika
export const deleteCart = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;

    try {
        const cart = await Cart.findOneAndDelete({ userId });
        if (!cart) {
            res.status(404).json({ message: 'Koszyk nie został znaleziony' });
            return;
        }
        res.status(200).json({ message: 'Koszyk usunięty pomyślnie' });
    } catch (error) {
        res.status(500).json({ message: 'Błąd serwera', error });
    }
};

// Utwórz nowy koszyk dla użytkownika
export const createCart = async (req: Request, res: Response): Promise<void> => {
    const userId = req.params.userId;

    try {
        const existingCart = await Cart.findOne({ userId });
        if (existingCart) {
            res.status(400).json({ message: 'Koszyk dla tego użytkownika już istnieje' });
            return;
        }

        const newCart = new Cart({
            userId,
            items: [],
            totalItems: 0,
            totalPrice: 0,
        });

        await newCart.save();
        res.status(201).json({ message: 'Koszyk utworzony pomyślnie', cart: newCart });
    } catch (error) {
        res.status(500).json({ message: 'Błąd serwera', error });
    }
};