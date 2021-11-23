// import all models
const Nomination = require("./Nomination");
const User = require("./User");
const Comment = require("./Comment");

// create associations
User.hasMany(Nomination, {
  foreignKey: "user_id",
});

Nomination.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Nomination.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Nomination, {
  foreignKey: "nomination_id",
  onDelete: "SET NULL",
});

User.hasMany(Nomination, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Nomination.hasMany(Comment, {
  foreignKey: "nomination_id",
});

module.exports = { User, Nomination, Comment };
