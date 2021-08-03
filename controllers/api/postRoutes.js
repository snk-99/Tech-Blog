const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Make new blog post route
router.post('/newPost', async (req, res) => {
  // validating username
  const postData = await User.findOne({
    where: { username: req.body.username },
  });

  if (!postData) {
    res
      .status(400)
      .json({ message: 'Incorrect username, please enter valid username' });
    return;
  }

  // create object with data structure I need for new blog post
  const npData = {
    title: req.body.title,
    content: req.body.content,
    user_id: postData.id,
  };

  // render individual blog post page
  res.render('home');

  // create new blog post
  const npPost = await Post.create(npData);
});

// edit blog post route by its 'id' value
router.put('/:id', async (req, res) => {
  try {
    const npData = await Post.update(
      // set all attributes of blog posts to values passed in to req.body
      {
        title: req.body.title,
        content: req.body.content,
        user_id: req.body.user_id,
      },
      { where: { id: req.params.id } }
    );

    // if wrong id entered
    if (!npData) {
      res.status(404).json({ message: 'id not found' });
    } else {
      res.status(200).json(bpData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
