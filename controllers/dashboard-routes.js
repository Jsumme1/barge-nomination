const router = require('express').Router();
const { Nomination, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

// get all noms for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Nomination.findAll({
    /*where: {
      user_id: req.session.user_id
    },*/
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'nomination_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['lastname']
        }
      },
      {
        model: User,
        attributes: ['lastname']
      }
    ]
  })
    .then(dbNominationData => {
      const noms = dbNominationData.map(nom => nom.get({ plain: true }));
      res.render('dashboard', { 'noms': noms, loggedIn: true });
    })
    .catch(err => {
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
          nom: nom,
          loggedIn: req.session.loggedIn,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Nomination.findByPk(req.params.id, {
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'nomination_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['lastname']
        }
      },
      {
        model: User,
        attributes: ['lastname']
      }
    ]
  })
    .then(dbNominationData => {
      if (dbNominationData) {
        const nom = dbNominationData.get({ plain: true });
        
        res.render('edit-nom', {
          'nom':nom,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;