const { Comment } = require("../models");

const commentData = [{ comment: "Great post", user_data: 1, post_id: 1 }];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
