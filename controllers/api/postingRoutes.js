const router = require('express').Router();
const { Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
      const postData = await Post.findAll({
        include: [{ model: Comment }]
      });
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      // spread operator
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;