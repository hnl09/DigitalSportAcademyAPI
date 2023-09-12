import express from 'express';

import {
    getCustomerByEmail,
    getCustomerById,
    getCustomers
} from '../controllers/customer.js';

import { authenticateToken } from '../controllers/users.js';

const router = express.Router()

router.get('/', authenticateToken, getCustomers)

router.get('/id/:id', authenticateToken, getCustomerById)

router.get('/email/:email', authenticateToken, getCustomerByEmail)

export default router;