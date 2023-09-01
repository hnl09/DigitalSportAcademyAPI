import express from 'express';
import {
    authenticateToken,
    getUser,
    userLogin,
    userRegistration
} from '../controllers/users.js';

const router = express.Router()

router.post('/', userRegistration)

router.post('/login', userLogin)

router.get('/user', authenticateToken, getUser)

export default router;