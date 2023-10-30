const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create new user
router.post("/", async (req, res) => {
  try {
    const newUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = newUserData.id;
      res.status(200).json(newUserData);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    // receive the login user name
    // find the user name from database
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    // console.log(userData.get({ plain: true }));
    if (!userData) {
      res.status(400).json({ message: "Incorrect username or password!" });
      return;
    }

    // compare password, if password match, login, if not resspond with error.
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect username or password!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userData.id;
      res.status(200).json({ user: userData, message: "You are logged in" });
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => res.status(204).end());
  } else {
    res.status(404).end();
  }
});
module.exports = router;
