const { Comment } = require('../models');

const commentData =[
    {
        "comment": "Great answers"
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;