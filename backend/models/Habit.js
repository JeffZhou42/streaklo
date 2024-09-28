const mongoose = require("mongoose")

const HabitSchema = new mongoose.Schema({
    habitName: String,
    habitImages: [{
        dailyImage: binData
    }],
    streaks: Number
})
//keep the images stored till someone's streak is broken
//set their streak to -1 when it's broken 
const HabitModel = mongoose.model("habits", HabitSchema)
module.exports = HabitModel