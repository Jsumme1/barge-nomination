const router = require("express").Router();
const sequelize = require("../config/connection");
const { Nomination, User, Comment } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log("======================");
  Nomination.findAll({
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "nomination_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbNominationData) => {
      const noms = dbNominationData.map((nom) => nom.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single nom
router.get("/nomination/:id", (req, res) => {
  Nomination.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "comment_text",
          "nomination_id",
          "user_id",
          "created_at",
        ],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbNominationData) => {
      if (!dbNominationData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const nom = dbNominationData.get({ plain: true });

      res.render("single-post", {
        nom,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
