// const passport = require('passport');
// const { Strategy } = require('passport-google-oauth20');
// const { getOwner }  = require('../controllers/routeFunctions');
// const db = require('../db/connection').knex;
// const JWT = require('jsonwebtoken');
// const config = require('../config');
const { verifyJWT } = require("../controllers/authUtils/passwordUtils");

const unprotectedRoutes = [
  "loginUser",
  "user-login",
  "registerUser",
  "logout",
  "assets",
  "forgotPassword"
];

const isAuthenticated = (req, res, next) => {
  const { cookies, url } = req;
  const { JWT: token, email } = cookies;
  if (!req.headers) {
    console.log("\nNo headers present\n");
    res.redirect("/logout");
    return;
  }

  if (unprotectedRoutes.some(route => url.includes(route))) {
    next();
    return;
  }

  if (!token || !email) {
    console.log("\nNo cookies present\n");
    res.redirect("/logout");
  } else {
    verifyJWT(token, email)
      .then(next)
      .catch(e => {
        console.log("JWT verification failed: ", e);
        res.redirect("/logout");
      });
  }
};

module.exports = server => {
  // passport.use(
  //   new Strategy({
  //     clientID: config.googleAuth.clientID,
  //     clientSecret: config.googleAuth.clientSecret,
  //     callbackURL: config.googleAuth.callbackURL
  //   },
  //   (accessToken, refreshToken, profile, cb) => {
  //     cb(null, profile)
  //   }
  //   )
  // );

  // passport.serializeUser((user, done) => {
  //   done(null, user);
  // });

  // passport.deserializeUser((user, done) => {
  //   done(null, user);
  // })

  // server.use(passport.initialize());

  // server.get(
  //   '/login/google',
  //   passport.authenticate(
  //     'google',
  //     {
  //       scope: ['profile', 'email'],
  //       failureRedirect: '404'
  //     }
  //   ),
  //   () => {}
  // );

  // function getOwnerByEmail(email) {
  //   return db('users')
  //     .where('email', email)
  //     .then(results => {
  //       if (results) {
  //         return results
  //       }
  //       console.log(`Owner not found by email ${email}`);
  //     })
  //     .catch(e => console.log('ERROR', e));
  // }

  // server.get(
  //   '/begin',
  //   passport.authenticate(
  //     'google',
  //     {
  //       scope: ['profile', 'email'],
  //       failureRedirect: '404',
  //     }
  //   ),
  //   (req, res) => {
  //     // logStuff(req.user.emails[0]);
  //     getOwnerByEmail(req.user.emails[0].value)
  //     .then(response => {
  //       res.cookie('email', response[0].email);
  //       res.cookie('id', response[0].id);
  //       return response;
  //     })
  //     .then((response) => {
  //       res.redirect(`/owner/${response[0].id}`)
  //     })
  //     .catch(e => {
  //       res.status(403).send('Not Authorized');
  //     })

  //   }
  // )

  server.get("/logout", (req, res) => {
    console.log("user being logged out");
    res.clearCookie("JWT");
    res.clearCookie("email");
    res.clearCookie("id");
    res.redirect("/user-login");
  });

  server.use(isAuthenticated);
};
