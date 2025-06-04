const getCommentsHandler = (req, res) => {
    res.send('Get comments route')
}

const getCommentHandler = (req, res) => {
    console.log(req.params)
    res.send(`Get comment route ${req.params.commentId}`)
}

const postCommentsHandler = (req, res) => {
    res.send('Post a comment route')
}

const deleteCommentHandler = (req, res) => {
    console.log(req.params)
    res.send(`Delete comment route ${req.params.commentId}`)
}

module.exports = {
    getCommentHandler,
    getCommentsHandler,
    postCommentsHandler,
    deleteCommentHandler,
}