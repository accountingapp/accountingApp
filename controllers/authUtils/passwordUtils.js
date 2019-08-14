const nodemailer = require("nodemailer");
const generatePassword = require("password-generator");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const UUID = require("uuid/v4");
const config = require("../../config");

function createPassword() {
  const password = generatePassword(12, false);
  return password;
}

function encryptPassword(password) {
  const encryptedPassword = bcrypt.hashSync(password, 8);
  return encryptedPassword;
}

function comparePasswords(credentials) {
  return user => {
    if (Array.isArray(user)) user = user[0];
    if (Array.isArray(credentials)) credentials = credentials[0];

    return new Promise((resolve, reject) => {
      bcrypt.compare(credentials.password, user.password, (err, res) => {
        if (res) resolve(user);
        else reject(new Error("Password is incorrect"));
      });
    });
  };
}

function createUUID() {
  return UUID();
}

function createJWT(user) {
  return new Promise((resolve, reject) => {
    JWT.sign(
      {
        user
      },
      config.jwtSecret,
      { expiresIn: "5d" },
      (err, token) => {
        if (err) {
          reject(new Error("JWT ERROR"));
        }
        user.token = token;
        resolve(user);
      }
    );
  });
}

function verifyJWT(token, email) {
  return new Promise((resolve, reject) => {
    JWT.verify(token, config.jwtSecret, (err, decoded) => {
      if (err || decoded.user.email !== email) {
        reject(new Error(err));
      }
      resolve();
    });
  });
}

function emailUser(user) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.nodemailer.email,
      pass: config.nodemailer.password
    }
  });

  const mailOptions = {
    from: config.nodemailer.email,
    to: user.email,
    subject: user.emailSubject || "Welcome to Financially Stated!",
    text: `Here are your login credentials!\n\nUsername: ${
      user.email
    }\nPassword: ${user.password}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("EMAIL ERROR", err);
    } else {
      console.log("EMAIL SUCCEEDED", info);
    }
  });
}

module.exports = {
  createPassword,
  encryptPassword,
  createUUID,
  emailUser,
  comparePasswords,
  createJWT,
  verifyJWT
};
