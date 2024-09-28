const mongoose = require("mongoose")

const FriendSchema = new mongoose.Schema({
    name: String,
    pfp: binData,
    habitName: String, //habit they belong to
    habitStreak: Number //streak on that habit
})

const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel