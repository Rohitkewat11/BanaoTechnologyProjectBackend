const userData = require("../model/userDataSchema");

// function for get all comment & Like//
const getU_data = async (req, res) => {
  try {
    const data = await userData.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(200).send(error);
  }
};

// function for add comment//

const addComment = async (req, res) => {
  const data = {
    comment: req.body.comment,
    like: req.body.like || 0,
  };

  try {
    await userData.create(data);
    res.status(200).send("Comment Added");
  } catch (error) {
    res.status(200).send(error);
  }
};

// function for find requested comment Id for updation //

const findComment = async (req, res) => {
  const ID = req.body.ID;

  const isComment = await userData.findOne({ _id: ID });
  res.status(200).send(isComment);
};

// function for update comment//

const updateComment = async (req, res) => {
  const { id, comment } = req.body;

  await userData.findOneAndUpdate({ _id: id }, { $set: { comment: comment } });
  res.status(200).send("comment update");
};

// function for update like number//
const updateLike = async (req, res) => {
  const { id, like } = req.body;

  await userData.findOneAndUpdate({ _id: id }, { $set: { like: like } });
  res.status(200).send("like update");
};

// function for remove comment//
const removeComment = async (req, res) => {
  const id = req.body.id;
  await userData.findOneAndDelete({ _id: id });
};

module.exports = {
  getU_data,
  addComment,
  removeComment,
  updateComment,
  findComment,
  updateLike,
};
