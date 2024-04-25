const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  comment: {
    type: String,
    require: true,
  },
  like: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("userdata", userData);
