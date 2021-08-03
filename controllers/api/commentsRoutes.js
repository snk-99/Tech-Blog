const router = require('express').Router();
const { Comment } = require('../../models');

// POST REQUEST
router.post('/', async (req, res) => {
  try {
    // CREATE A COMMENT
    const commentData = await Comment.create({
      comment: req.body.comment,
      user_id: req.session.userId,
      post_id: req.body.post_id,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// EXPORT ROUTER
module.exports = router;
