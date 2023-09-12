import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import customersRoutes from './routes/customer.js'
import usersRoutes from './routes/users.js'
import homepageRoute from './routes/homepage.js'
dotenv.config()

const app = express();
const PORT = 6500;

app.use(bodyParser.json());

app.use('/customers', customersRoutes)

app.use('/users', usersRoutes)

app.use('/', homepageRoute);

app.use(express.static("public"))

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));