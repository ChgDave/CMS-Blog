const router = require("express").Router();
const { Post, Comment, User } = require("../models");
const withAuth = require("../utils/auth");

// get post by user id
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.userId },
    });

    if (!postData) {
      res.status(400).json({ message: "Post does not exist!" });
      return;
    }

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).json(error);
  }
});

// path to create a post
router.post("/", async (req, res) => {
  try {
    const postData = Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId,
    });
    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// path to get one post
router.get("/:id", async (req, res) => {
  try {
    // update the post
    const postData = await Post.findOne({
      where: { id: req.params.id },
    });
    // if there is no data then response with error
    if (!postData) {
      res.status(400).json({ message: "Post does not exist!" });
      return;
    }

    const post = postData.get({ plain: true });
    console.log(post);
    res.render("postedit", { post, loggedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).json(error);
  }
});

// path to update a post
router.put("/:id", async (req, res) => {
  try {
    // update the post
    const postData = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      { where: { id: req.params.id } }
    );
    // if there is no data then response with error
    if (!postData[0]) {
      res.status(400).json({ message: "Post does not exist!" });
      return;
    }

    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// path to delete a post
router.delete("/:id", async (req, res) => {
  try {
    // update the post
    const postData = await Post.destroy({ where: { id: req.params.id } });
    // if there is no data then response with error
    if (!postData) {
      res.status(400).json({ message: "Post does not exist!" });
      return;
    }

    res.status(200).json(postData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
