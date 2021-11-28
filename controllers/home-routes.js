const router = require("express").Router();
const sequelize = require("../config/connection");
const { Nomination, User, Comment } = require("../models");

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

// get single nom by counterparty
router.get("/nomination/:counterparty_name", (req, res) => {
  Nomination.findOne({
    where: {
<<<<<<< HEAD
    counterparty_name: req.params.counterparty_name,
=======
      counterparty_name: req.params.counterparty_name,
>>>>>>> a7c08905ca96499d8d07b6b96a51a0275c80d225
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
<<<<<<< HEAD
        res.status(404).json({ message: "No post found with this id" });
=======
        res.status(404).json({ message: "No nominations found with this counterparty" });
>>>>>>> a7c08905ca96499d8d07b6b96a51a0275c80d225
        return;
      }

      const nom = dbNominationData.get({ plain: true });

<<<<<<< HEAD
      res.render("single-post", {
=======
      res.render("single-nom", {
>>>>>>> a7c08905ca96499d8d07b6b96a51a0275c80d225
        nom,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single nom by movement date
router.get("/nomination/:move_date", (req, res) => {
  Nomination.findOne({
    where: {
      move_date: req.params.move_date,
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
<<<<<<< HEAD
        res.status(404).json({ message: "No post found with this id" });
=======
        res
          .status(404)
          .json({ message: "No no nominations found with this movement date" });
>>>>>>> a7c08905ca96499d8d07b6b96a51a0275c80d225
        return;
      }

      const nom = dbNominationData.get({ plain: true });

<<<<<<< HEAD
      res.render("single-post", {
=======
      res.render("single-nom", {
>>>>>>> a7c08905ca96499d8d07b6b96a51a0275c80d225
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
