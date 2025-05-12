import express from 'express';
import {
    getAllUsers,
} from '../controllers/userController';
import {
    registerUser,
    loginUser,
} from "../controllers/authController";

const router = express.Router();

router.get('/all', getAllUsers); // GET /api/users

router.post('/login', loginUser); // POST /api/users/login

router.post('/register', registerUser); // POST /api/users

export default router;