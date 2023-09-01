import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const users = [
    {
        name: 'Henrique',
        password: 'password1'
    },
    {
        name: 'Tony',
        password: 'password2'
    }
]

const errorMsg = 'Error, try again in a few minutes or contact a developer for more details.'

export const userRegistration = async (req, res) => {
    try {
        const password = req.body.password
        const hashedPassword = await bcrypt.hash(password, 10) // salt value
        const user = {
            name: req.body.name,
            password: hashedPassword
        }
        users.push(user)
        res.status(201).send(`User ${user.name} created`)
    } catch (error) {
        res.status(500).send(errorMsg);
        console.error('Error creating users:', error);
    }
}

export const userLogin = async (req, res) => {
    const user = users.find(user => user.name = req.body.name)
    if (user == null) {
        return res.status(400).send('User not found')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) { // Here he only validates the password, create a rule to validathe the user too
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
            res.json({ accessToken: accessToken })
        } else {
            res.send('Access Denied')
        }
    } catch (error) {
        res.status(500).send(errorMsg);
        console.error('Error loggin in:', error);
    }
}

export const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

export const getUser = async (req, res) => {
    res.json(users.filter(user => user.name === req.user.name))
}