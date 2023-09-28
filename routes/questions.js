import express from 'express';

import { authenticateToken } from '../controllers/users.js';
import { getQuestions, getQuestionById, createQuestions } from '../controllers/questions.js';

const router = express.Router()

router.get('/', authenticateToken, getQuestions)

router.get('/:id', authenticateToken, getQuestionById)

router.post('/createQuestions', authenticateToken, createQuestions)

export default router