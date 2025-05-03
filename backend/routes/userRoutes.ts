import express from 'express';
import {
    getAllUsers,
    createUser, loginUser
} from '../controllers/userController';

const router = express.Router();

router.get('/', getAllUsers); // GET /api/users
router.post('/login', loginUser);  // Login userrouter.post('/login', loginUser);  // Login user
router.post('/register', createUser); // POST /api/users

export default router;
