const mongoose = require("mongoose")

const HabitSchema = new mongoose.Schema({
    habitName: String,
    //list of habit images
    //list of streaks
})
//keep the images stored till someone's streak is broken
//set their streak to -1 when it's broken 
const TodoModel = mongoose.model("todos", TodoSchema)
module.exports = TodoModel