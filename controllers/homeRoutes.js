const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require('../utils/auth');

//render homepage if not logged in
// router.get('/', (req, res) => {
//   if(req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }
//   res.render('/login')
// });

router.get('/', (req, res) => {
  // console.log(req.session);

  Post.findAll({
    attributes: ["id", "title", "post_text", "date_created"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  }) .then((dbPostData) => {
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("dashboard");
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

//render homepage
      //from homepage Login/signup
router.get('/homepage', (req, res) => {

  res.render('homepage');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/newPost', (req, res) => {
  res.render('newPost');
});





module.exports = router;