import express from 'express';

import {
    getCustomerById,
    getCustomers
} from '../controllers/customer.js';

import { authenticateToken } from '../controllers/users.js';

const router = express.Router()

router.get('/', getCustomers)

router.get('/:id', getCustomerById)

export default router;