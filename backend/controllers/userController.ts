import { Request, Response } from 'express';
import User from '../models/User';

// Pobierz wszystkich użytkowników (bez haseł)
export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find().select('-passwordHash');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Błąd serwera', error });
    }
};
