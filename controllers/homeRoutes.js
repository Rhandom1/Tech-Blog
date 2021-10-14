const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require('../utils/auth');

router.get('/test', async (req, res) => {
 

  console.log('user id is visited')
  try {
      const getData = await Post.findAll({
      include: [{model: User}],
        where: {
          user_id: 1
        }
      });

      const postData = await getData.map((post) =>
        post.get({ plain: true})
      );

     // console.log("This is the data from the database" ,postData)
      res.render('homepage', { postData
        //loggedIn: req.session.logged_in,
      });
        } 
        catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });

//render homepage if not logged in
// router.get('/', (req, res) => {
//   if(req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }
//   res.render('/login')
// });

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