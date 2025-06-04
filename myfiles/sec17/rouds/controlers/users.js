const getUsersHandler = (req, res) => {
    res.send('Get users route')
}

const getSingleUserHandler = (req, res) => {
    console.log(req.params)
    res.send(`Get user route ${req.params.userId}`)
}

const postUserHandler = (req, res) => {
    res.send('Post a user route')
}

module.exports = {
    getUsersHandler,
    postUserHandler,
    getSingleUserHandler
}