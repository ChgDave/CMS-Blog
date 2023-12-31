const { Post } = require("../models");

const postData = [
  {
    title: "first post",
    content: "this is my first post",
    user_id: 1,
  },
  {
    title: "second post",
    content: "this is my second post",
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
