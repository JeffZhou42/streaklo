const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    //list of habits + streak for each habit
    habits: {
        hab: String,
        streak: Number
    }
})

const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel