const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// get all comment
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll();
    res.render("comment", { commentData, loggedIn: req.session.loggedIn });
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
    const comment = commentData.get({ plain: true });
    res.render("commentedit", { comment });
  } catch (error) {
    res.status(500).json(error);
  }
});

// update one comment
router.put("/:id", async (req, res) => {
  try {
    const commentData = await Comment.update(
      { comment: req.body.comment },
      { where: { id: req.params.id } }
    );
    if (!commentData[0]) {
      res.status(400).json({ message: "Post does not exist!" });
      return;
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all comments for a specific post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }],
    });

    if (!postData) {
      res.status(400).json({ message: "Post does not exist!" });
      return;
    }

    const post = postData.get({ plain: true });

    const commentData = await Comment.findAll({
      include: [{ model: User }],
      where: { post_id: req.params.id },
    });

    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log(post);
    console.log(comments);
    res.render("comment", {
      post,
      comments,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// path to create a comment
router.post("/", async (req, res) => {
  try {
    console.log("new comment");
    const commentData = Comment.create({
      comment: req.body.comment,
      post_id: req.body.post_id,
      user_id: req.session.userId,
    });
    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// path to delete a comment
router.delete("/:id", async (req, res) => {
  try {
    // delete comment
    const commentData = await Comment.destroy({ where: { id: req.params.id } });
    // if there is no data then response with error
    if (!commentData) {
      res.status(400).json({ message: "Post does not exist!" });
      return;
    }

    res.status(200).json(commentData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
