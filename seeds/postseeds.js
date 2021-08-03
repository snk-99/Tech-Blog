const { Post } = require('../models');

const postData =[
  {
    "title": "Difference between “ == “ and “ === “ operators?",
    "text": "Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types."
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
