// import all models
const Nomination = require("./Nomination");
const User = require("./User");
const Comment = require("./Comment");
const Connector = require("./Connector");

// create associations
// create associations
User.hasMany(Nomination, {
  foreignKey: 'user_id'
});

Nomination.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

User.belongsToMany(Nomination, {
  through: Connector,
  as: 'connect_noms',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Nomination.belongsToMany(User, {
  through: Connector,
  as: 'connect_noms',
  foreignKey: 'nomination_id',
  onDelete: 'SET NULL'
});

Connector.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Connector.belongsTo(Nomination, {
  foreignKey: 'nomination_id',
  onDelete: 'SET NULL'
});

User.hasMany(Connector, {
  foreignKey: 'user_id'
});

Nomination.hasMany(Connector, {
  foreignKey: 'nomination_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Nomination, {
  foreignKey: 'nomination_id',
  onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Nomination.hasMany(Comment, {
  foreignKey: 'nomination_id'
});

module.exports = { User, Nomination, Connector, Comment };
