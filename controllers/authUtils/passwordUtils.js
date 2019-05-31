const nodemailer = require('nodemailer');
const generatePassword = require('password-generator');
const bcrypt = require('bcryptjs');

function createPassword() {
  const password = generatePassword(12, false);
  console.log('THE PASSWORD IS =', password);
  return password;
}

function encryptPassword(password) {
  const encryptedPassword = bcrypt.hashSync(password, 8);
  return encryptedPassword;
}

function emailUser(user) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '<sending email>',
      pass: '<password>'
    }
  });

  const mailOptions = {
    from: 'landonmarkroberts@gmail.com',
    to: user.email,
    subject: 'Welcome to Financially Stated!',
    text: `Here are your login credentials\n\nUsername: ${user.email}\nPassword: ${user.password}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log('EMAIL ERROR', err);
    } else {
      console.log('EMAIL SUCCEEDED', info);
    }
  });
}

module.exports = { createPassword, encryptPassword, emailUser }
