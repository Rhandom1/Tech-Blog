const router = require('express').Router();
const { Comment, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const comment = await Comment.findAll({
          include: [{ model: Post }]
        });
    
        res.status(200).json(comment);
      } catch (err) {
        res.status(400).json(err);
      }
    });


router.post('/:id', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!newComment[0]) {
        res.status(404).json({ message: 'No category with this id found!'});
      }
      res.status(200).json(newComment);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!commentData[0]) {
      res.status(404).json({ message: 'No category with this id found!'});
    }
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;