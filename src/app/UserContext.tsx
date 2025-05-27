'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
    id: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            console.log(`Zalogowany użytkownik: (${user.email})`);
            console.log(`ID użytkownika: (${user.id})`);
        } else {
            localStorage.removeItem('loggedInUser');
            console.log('Brak zalogowanego użytkownika');
        }
    }, [user]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser musi być używane wewnątrz UserProvider');
    }
    return context;
};