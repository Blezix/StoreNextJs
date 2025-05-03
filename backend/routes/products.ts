import express from 'express';
import Product from '../models/Product';

const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// POST a new product
router.post('/', async (req, res) => {
    const { name, description, price, category, imageUrl } = req.body;

    try {
        const newProduct = new Product({ name, description, price, category, imageUrl });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: 'Invalid product data' });
    }
});

export default router;
