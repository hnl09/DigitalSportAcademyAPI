
const errorMsg = 'Error, try again in a few minutes or contact a developer for more details.'

export const getUsers = (req, res) => {
    res.send('TODOS OS USUÁRIOS')
}

export const getUserById = (req, res) => {
    const { id } = req.params
    res.send(req.params)
}