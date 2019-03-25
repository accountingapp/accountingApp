const passport = require('passport');
const jwt = require('jsonwebtoken');
const { Strategy } = require('passport-google-oauth20');
const config = require('../config');
const { getOwner }  = require('../controllers/routeFunctions');
const db = require('../db/connection').knex;


module.exports = server => {
  passport.use(
    new Strategy({
      clientID: config.googleAuth.clientID,
      clientSecret: config.googleAuth.clientSecret,
      callbackURL: config.googleAuth.callbackURL
    },
    (accessToken, refreshToken, profile, cb) => {
      cb(null, profile)
    }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  })

  server.use(passport.initialize());

  server.get(
    '/login/google',
    passport.authenticate(
      'google', 
      { 
        scope: ['profile', 'email'],
        failureRedirect: '404'   
      }
    ),
    () => {}
  );

  function getOwnerByEmail(email) {
    return db('users')
      .where('email', email)
      .then(results => {
        if (results) {
          return results
        } 
        console.log(`Owner not found by email ${email}`);
      })
      .catch(e => console.log('ERROR', e));
  }

  server.get(
    '/begin',
    passport.authenticate(
      'google',
      {
        scope: ['profile', 'email'],
        failureRedirect: '404',
      }
    ),
    (req, res) => {
      // logStuff(req.user.emails[0]);
      getOwnerByEmail(req.user.emails[0].value)
      .then(response => {
        res.cookie('email', response[0].email);
        res.cookie('id', response[0].id);
        return response;
      })
      .then((response) => {
        res.redirect(`/owner/${response[0].id}`)
      })
      .catch(e => {
        res.status(403).send('Not Authorized');
      })

    }
  )

  server.get(
    '/logout',
    (req, res) => {
      req.logout();
      res.clearCookie('email');
      res.clearCookie('id');
      res.clearCookie('space');
      res.redirect('/user-login');
    }
  )

}