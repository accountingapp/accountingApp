const db = require("../../db/connection").knex;
const {
  createPassword,
  encryptPassword,
  emailUser,
  comparePasswords,
  createJWT
} = require("../authUtils/passwordUtils");

function getOwnerByName(req, res) {
  db("users")
    .where("name", "ilike", `%${req.params.name}%`)
    .then(results => {
      console.log("RESULTS: ", results);
      if (results) {
        console.log(`Successfully retrieved owner by name`);
        res.status(200).send(results);
      } else {
        console.log(`No user found`);
      }
    })
    .catch(error => {
      console.log(`ERROR: ${error}`);
    });
}

function getAllUsers(req, res) {
  db("users")
    .then(results => {
      if (results) {
        console.log(`Successfully retrieved users`);
        res.status(200).send(results);
      } else {
        console.log(`No users found`);
      }
    })
    .catch(error => {
      console.log("Error retrieving users: ", error);
    });
}

function createUser(req, res) {
  const { user } = req.body;
  const password = createPassword();
  user.password = encryptPassword(password);

  db("users")
    .insert(user)
    .then(() => {
      user.password = password;
      // fire and forget as of now
      emailUser(user);
    })
    .then(() => {
      res.status(201).send("New User Created");
    })
    .catch(e => {
      res.status(400).send(e);
    });
}

function loginUser(req, res) {
  const { credentials } = req.body;
  db("users")
    .where("email", credentials.email)
    .then(user => {
      if (user[0]) return user[0];
      throw new Error(
        "This email address is not associated with an account.  Please register to create one!"
      );
    })
    .then(comparePasswords(credentials))
    .then(createJWT)
    .then(user => {
      res.cookie("JWT", user.token);
      res.cookie("email", user.email);
    })
    .then(() => {
      res.status(200).send("Login Successful");
    })
    .catch(e => {
      res.status(400).send(e.message);
    });
}

function forgotPassword(req, res) {
  const { email } = req.body;
  const password = createPassword();
  const encryptedPassword = encryptPassword(password);

  db("users")
    .where("email", email)
    .update(
      {
        password: encryptedPassword
      },
      ["name", "email"]
    )
    .then(updatedUser => {
      if (updatedUser[0]) return updatedUser[0];
      throw new Error(
        "Password could not be updated using the email address provided.  If you do not already have an account with this email address, please sign up now to create one!"
      );
    })
    .then(user => {
      user.emailSubject = "Financially Stated Password Reset";
      user.password = password;
      emailUser(user);
    })
    .then(() => {
      res
        .status(200)
        .send(
          "Your password has been successfully reset!  Please check your email for your login credentials."
        );
    })
    .catch(e => {
      res.status(400).send(e.message);
    });
}

module.exports = {
  getOwnerByName,
  getAllUsers,
  createUser,
  loginUser,
  forgotPassword
};
