const router = require("express").Router();

const homeRoute = require("./homeroute");
const postRoute = require("./postroute");
const userRoute = require("./userroute");
const commentRoute = require("./commentroute");

router.use("/", homeRoute);
router.use("/post", postRoute);
router.use("/user", userRoute);
router.use("/comment", commentRoute);

module.exports = router;
