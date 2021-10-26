const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");





//render homepage
      //from homepage Login/signup
router.get('/homepage', (req, res) => {

  res.render('homepage');
});

//render homepage if not logged in
router.get('/', (req, res) => {
  if(req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('/login')
});

module.exports = router;