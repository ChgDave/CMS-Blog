const router = require("express").Router();

const homeRoute = require("./homeroute");
const postRoute = require("./postroute");
const userRoute = require("./userroute");

router.use("/home", homeRoute);
router.use("/post", postRoute);
router.use("/user", userRoute);

module.exports = router;
