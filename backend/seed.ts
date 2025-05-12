import User from './models/User'; // Import modelu User

export const seedUsers = async () => {
    try {
        // Usunięcie istniejących użytkowników
        await User.deleteMany();
        console.log('Usunięto istniejących użytkowników');

        // Przykładowi użytkownicy
        const users = [
            { email: 'user1@example.com', passwordHash: 'password1' },
            { email: 'user2@example.com', passwordHash: 'password2' },
            { email: 'user3@example.com', passwordHash: 'password3' },
        ];

        // Dodanie użytkowników do bazy danych
        await User.insertMany(users);
        console.log('Dodano przykładowych użytkowników');
    } catch (error) {
        console.error('Błąd podczas seedowania bazy danych:', error);
        throw error;
    }
};