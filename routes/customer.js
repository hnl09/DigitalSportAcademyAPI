import express from 'express';

import {
    getCustomerById,
    getCustomers
} from '../controllers/customer.js';

const router = express.Router()

router.get('/', getCustomers)

router.get('/:id', getCustomerById)

export default router;