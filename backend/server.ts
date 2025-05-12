import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './routes/products';
import userRoutes from './routes/userRoutes';
import {seedUsers} from './seed';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.use(cors({
    origin: 'http://localhost:3000', // Adres frontendu
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Dozwolone metody
    credentials: true, // Jeśli używasz ciasteczek
}));
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
mongoose.connect(process.env.MONGO_URI || '', {

})
    .then(() => {
        app.listen(PORT, () => {
            seedUsers();
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });
