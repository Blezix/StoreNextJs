import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    console.log('Request body:', req.body); // Loguj dane wejściowe

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('User already exists:', email); // Loguj, jeśli użytkownik istnieje
            res.status(400).json({ message: 'Użytkownik już istnieje' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, passwordHash: hashedPassword });
        await newUser.save();

        console.log('User created:', newUser); // Loguj utworzonego użytkownika

        res.status(201).json({
            message: 'Użytkownik zarejestrowany pomyślnie',
            user: { id: newUser._id, email: newUser.email },
        });
    } catch (error) {
        console.error('Error during registration:', error); // Loguj błędy
        res.status(500).json({ message: 'Błąd serwera', error });
    }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(401).json({ message: 'Nieprawidłowe dane logowania' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            res.status(401).json({ message: 'Nieprawidłowe dane logowania' });
            return;
        }

        res.status(200).json({
            message: 'Zalogowano pomyślnie',
            user: { id: user._id, email: user.email },
        });
    } catch (error) {
        res.status(500).json({ message: 'Błąd serwera', error });
    }
};