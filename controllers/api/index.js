const router = require('express').Router();
// imports our user, post, and comment routes from the api folder
const commentRoutes = require('./commentsRoutes.js');
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes.js');




router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;
