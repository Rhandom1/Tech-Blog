const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "This is a testing comment"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "This is a second testing comment"
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "This is a third testing comment"
    }
]

const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;