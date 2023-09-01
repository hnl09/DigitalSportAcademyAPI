import bcrypt from 'bcrypt'

const users = []

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
        res.status(201).send(user)
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
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Logged in')
        } else {
            res.send('Access Denied')
        }
    } catch (error) {
        res.status(500).send(errorMsg);
        console.error('Error loggin in:', error);
    }
}

export const userAuthentication = async (req, res) => {
    // Authenticate User
}