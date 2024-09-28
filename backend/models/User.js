const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: String,
    pfp: String,
    password: String,
    //list of habits + streak for each habit
    habits: [{
        habit: String,
        streak: Number,
        timeSinceLastPost: Number
    }]
})

const UserModel = mongoose.model("todos", UserSchema)
module.exports = UserModel