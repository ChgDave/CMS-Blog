const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// get all comment
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get one comment
router.get("/:id", async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id);
    if (!commentData) {
      res.status(400).json({ message: "Post does not exist!" });
      return;
    }
    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// path to create a comment
router.post("/", async (req, res) => {
  try {
    const commentData = Comment.create({
      comment: req.body.comment,
      post_id: req.body.post_id,
      user_id: req.body.user_id,
    });
    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
