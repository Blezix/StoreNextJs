import express from 'express';
import Product from '../models/Product';
const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch  {
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
    } catch {
        res.status(400).json({ message: 'Invalid product data' });
    }
});
router.get('/:slug', async (req: any, res: any) => {
    const { slug } = req.params;

    try {
        const product = await Product.findOne({ slug });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch  {
            res.status(500).json({ message: '   Server Error' });
    }
});


export default router;
