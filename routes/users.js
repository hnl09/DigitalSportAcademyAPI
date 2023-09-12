import express from 'express';
import {
    authenticateToken,
    getUser,
    logoutUser,
    userLogin,
    userRegistration
} from '../controllers/users.js';

const router = express.Router()

router.post('/register', userRegistration)

router.post('/login', userLogin)

router.get('/user', authenticateToken, getUser)

router.delete('/logout', authenticateToken, logoutUser)

export default router;