const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");


//render homepage
      //set / to render the hompage
router.get('/', (req, res) => {

  res.render('homepage');
});

//render homepage if not logged in
  // if logged in redirects to the dashboard
router.get('/login', (req, res) => {
  // if(req.session.logged_in) {
  //   res.redirect('/dashboard');
  //   return;
  // }
  res.render('login');
});

router.get('/signup', (req,res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }
  res.render('signup');
});

module.exports = router;