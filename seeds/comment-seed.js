const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: "Don't blow up the dock",
    user_id: 1,
    nomination_id: 1
  },
  {
    comment_text: 'Mix tanks for 3 hours after',
    user_id: 1,
    nomination_id: 2
  },
  {
    comment_text: 'Load evenly across all compartments',
    user_id: 3,
    nomination_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;