const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "This is a testing comment"
    }
]

const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;