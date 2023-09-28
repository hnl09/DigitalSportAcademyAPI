import express from 'express';

import { authenticateToken } from '../controllers/users.js';
import { getQuestions } from '../controllers/questions.js';

const router = express.Router()

router.get('/', authenticateToken, getQuestions)

export default router