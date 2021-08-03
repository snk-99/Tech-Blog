const router = require('express').Router();
const { Comment } = require('../../models');

// POST REQUEST
router.post('/', async (req, res) => {
  try {
    // CREATE A COMMENT
    const commentData = await Comment.create(req.body);

    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT by id
router.put('/:id', async (req, res) => {
  try {
    const commentData = await Comment.update(
      // set all attributes of comments to values passed in to req.body
      {
        content: req.body.content,
        user_id: req.body.user_id,
        blogpost_id: req.body.blogpost_id,
      },
      { where: { id: req.params.id } }
    );

    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE by id
router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORT ROUTER
module.exports = router;
