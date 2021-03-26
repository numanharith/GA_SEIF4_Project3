const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  rooms: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room'
  }]
});

const User = mongoose.model("User", userSchema);
module.exports = User;