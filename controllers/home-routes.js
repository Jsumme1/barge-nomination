const router = require("express").Router();
const { Sequelize } = require("sequelize/dist");
const sequelize = require("../config/connection");
const { Nomination, User, Comment } = require("../models");
const Op = Sequelize.Op
// get all nominations for homepage
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
        noms,
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
        res.status(404).json({ message: "No nomination found with this id" });
        return;
      }

      const nom = dbNominationData.get({ plain: true });

      res.render("single-nom", {
        nom,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all noms by counterparty
router.get("/search/counterparty", (req, res) => {
  Nomination.findOne({
    where: {
    counterparty_name: req.query.counterparty_name,
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
        res.status(404).json({ message: "No nominations found with this counterparty" });
        return;
      }

      const nom = dbNominationData.get({ plain: true });

      res.render("single-nom", {
        nom,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// get all noms by inspector name
router.get("/search/inspector", (req, res) => {
  Nomination.findOne({
    where: {
      inspector_name: req.query.inspector,

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
        res
          .status(404)
          .json({ message: "No nominations found with this inspector name" });
        return;
      }

      const nom = dbNominationData.get({ plain: true });

      res.render("single-nom", {
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
