const router = require('express').Router();
const { Nomination, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

// get all noms for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Nomination.findAll({
    where: {
      user_id: req.session.user_id
    },
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'nomination_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['last_name', 'first_name', 'role', 'email', 'password']
        }
      },
      {
        model: User,
        attributes: ['last_name']
      }
    ]
  })
    .then(dbNominationData => {
      const noms = dbNominationData.map(nom => nom.get({ plain: true }));
      res.render('dashboard', { noms, loggedIn: true });
    })
    .catch(err => {
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
          attributes: ['last_name', 'first_name', 'role', 'email', 'password']
        
        }
      },
    ]
  })
    .then(dbNominationData => {
      if (dbNominationData) {
        const nom = dbNominationData.get({ plain: true });
        
        res.render('edit-nom', {
          nom,
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