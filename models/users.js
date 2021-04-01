const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

///below statics is for login purpose
userSchema.statics.findUser = async function (username, password) {
  const user = await User.find({ username, password });
  if (user) {
    return user;
  } else {
    return;
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
