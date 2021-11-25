const router = require("express").Router();
const { Nomination, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

// get all nominations
router.get("/", (req, res) => {
  console.log("======================");
  Nomination.findAll({
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ["id", "comment_text", "nomination_id", "user_id", "created_at"],
    //     include: {
    //       model: User,
    //       attributes: ["last_name"],
    //     },
    //   },
    //   {
    //     model: User,
    //     attributes: ["last_name"],
    //   },
    // ],
  })
    .then((dbNominationData) => res.json(dbNominationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Nomination.findOne({
    where: {
      id: req.params.id,
    },
    // include: [
    //   {
    //     model: Comment,
    //     attributes: ["id", "comment_text", "nomination_id", "user_id", "created_at"],
    //     include: {
    //       model: User,
    //       attributes: ["last_name"],
    //     },
    //   },
    //   {
    //     model: User,
    //     attributes: ["last_name"],
    //   },
    // ],
  })
    .then((dbNominationData) => {
      if (!dbNominationData) {
        res.status(404).json({ message: "No nomination found with this id" });
        return;
      }
      res.json(dbNominationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  Nomination.create({
      title: req.body.title,
      user_id: req.session.user_id,
    })
    .then((dbNominationData) => res.json(dbNominationData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Nomination.update(
      {
        title: req.body.title,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((dbNominationData) => {
      if (!dbNominationData) {
        res.status(404).json({ message: "No nomination found with this id" });
        return;
      }
      res.json(dbNominationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Nomination.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbNominationData) => {
      if (!dbNominationData) {
        res.status(404).json({ message: "No nomination found with this id" });
        return;
      }
      res.json(dbNominationData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
