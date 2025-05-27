import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface JwtPayload {
    id: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]; // Pobierz token z nagłówka Authorization

    if (!token) {
        return res.status(401).json({ message: 'Brak tokenu uwierzytelniającego' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || '') as JwtPayload;
        req.user = { id: decoded.id }; // Dodaj dane użytkownika do obiektu `req`
        next();
    } catch  {
        res.status(401).json({ message: 'Nieprawidłowy token' });
    }
};