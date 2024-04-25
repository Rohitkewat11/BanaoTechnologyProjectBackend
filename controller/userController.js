const userDB = require("../model/userSchema");
const bcrypt = require("bcrypt");

// for get all user list//
const getUser = async (req, res) => {
  try {
    const myData = await userDB.find({});
    res.status(200).send(myData);
  } catch (error) {
    console.log(error);
  }
};

// function for Add New user//
const addUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const isUser = await userDB.findOne({ email: email.toLowerCase() });
    if (isUser) {
      res.status(200).send("Email exist");
    } else {
      // hashing password with bcrypt library//
      const salt = 10;
      const hash_password = await bcrypt.hash(password, salt);

      const userData = {
        firstName: firstName.toUpperCase(),
        lastName: lastName.toUpperCase(),
        email: email.toLowerCase(),
        password: hash_password,
      };

      await userDB.create(userData);
      res.status(200).send("New user added successfully");
    }
  } catch (error) {
    res.status(200).send(error);
  }
};

// function for User login//

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // checking user email available ot not//
    const isUser = await userDB.findOne({ email: email.toLowerCase() });
    if (isUser) {
      const isPasswordMatch = await bcrypt.compare(password, isUser.password);
      if (isPasswordMatch) {
        res.status(200).send({data:isUser,text:"ok"});
      } else {
        res.status(200).send("Wrong Password");
      }
    } else {
      res.status(200).send("Wrong E-mail");
    }
  } catch (error) {
    res.send(error);
  }
};

// function for forget Password//
const F_password = async (req, res) => {
  const { email, password } = req.body;

  try {
    // checking user email available ot not//
    const isUser = await userDB.findOne({ email: email.toLowerCase() });
    console.log(isUser);
    if (isUser) {
      // hashing updated password with bcrypt library//
      const salt = 10;
       const hash_password = await bcrypt.hash(password, salt);

      await userDB.findOneAndUpdate({ email: email },{ $set: { password: hash_password } });

      res.status(200).send("password update successfully");
    } else {
      res.status(200).send("Wrong E-mail");
    }
  } catch (error) {
    res.status(200).send(error);
  }
};

// Import all API function//
module.exports = { getUser, addUser, userLogin, F_password };
