const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");
//For the Dashboard page
  //once logged in render posts of the user
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

//get a single post
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "post_text"],
    include: [
      {
        model: Comment,
        attributes: ["id", "post_id", "user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username", "id"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      // serialize the data
      const post = dbPostData.get({ plain: true });

      res.render("viewpost", {
        post,
        // logged_in: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/create/", (req, res) => {
//   Post.findAll({
//     where: {
//       user_id: req.session.user_id,
//     },
//     attributes: ["id", "title", "post_text"],
//     include: [
//       {
//         model: Comment,
//         attributes: ["id", "post_id", "user_id"],
//         include: {
//           model: User,
//           attributes: ["username"],
//         },
//       },
//       {
//         model: User,
//         attributes: ["username", "id"],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       const posts = dbPostData.map((post) => post.get({ plain: true }));
//       // res.render("create-post", { posts, logged_in: true });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;