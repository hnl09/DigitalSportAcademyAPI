import express from 'express';
import {
    userLogin,
    userRegistration
} from '../controllers/users.js';

const router = express.Router()

router.post('/', userRegistration)

router.post('/login', userLogin)

export default router;