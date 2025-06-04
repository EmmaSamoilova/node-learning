const express = require('express')
const {
    getCommentsHandler,
    getCommentHandler,
    postCommentsHandler,
    deleteCommentHandler
} = require('../controlers/comments')

const router = express.Router()

router.get('/', getCommentsHandler)
//app.route('/comments')
//    .get(getCommentsHandler)
//    .post(postCommentsHandler)
router.post('/', postCommentsHandler)
router.get(':commentId', getCommentHandler)
router.delete(':commentId', deleteCommentHandler)

module.exports = router