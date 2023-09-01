import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import customersRoutes from './routes/customer.js'
import usersRoutes from './routes/users.js'
dotenv.config()

const app = express();
const PORT = 6000;

app.use(bodyParser.json());

app.use('/customers', customersRoutes)

app.use('/users', usersRoutes)

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));