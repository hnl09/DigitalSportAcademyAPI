import express from 'express';

import {
    getCustomerByEmail,
    getCustomerById,
    getCustomers
} from '../controllers/customer.js';

import { authenticateToken } from '../controllers/users.js';

const router = express.Router()

router.get('/', getCustomers)

router.get('/id/:id', getCustomerById)

router.get('/email/:email', getCustomerByEmail)

export default router;