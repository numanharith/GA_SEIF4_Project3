const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minLength: 4 },
  password: { type: String, required: true, minLength: 4 },
});

///below statics is for login purpose
userSchema.statics.findUser = async function (username, password) {
  const user = await User.findOne({ username }); ///find user first using findone
  if (!user) {
    ///if not user will return no.
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password); /// compare user key in pw with backend pw
  if (!isMatch) {
    return; //if false return empty
  }
  return user; // if true return user
};

userSchema.pre("save", async function (next) {
  const user = this; ///this referring to user
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  ///middleware
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
