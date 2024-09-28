const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: String,
    pfp: binData,
    password: String,
    //list of habits + streak for each habit
    habits: [{
        habit: String,
        streak: Number
    }]
})

const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel