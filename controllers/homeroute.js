const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// get all post for the homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({ include: [{ model: User }] });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).json(error);
  }
});

// login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
