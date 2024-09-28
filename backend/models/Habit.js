const mongoose = require("mongoose")

const HabitSchema = new mongoose.Schema({
    habitName: String,
    //streaks stored, personal streaks and friend streaks (combined)
    personalStreak: Number,
    imageList: [{
        dailyImage: binData
    }],
    //for demo, add images to preset daily image list
    //just have user break their own streak to clear image list
    people: [{
        name: String,
        dailyStreak: Number,
    }]
}) 
const HabitModel = mongoose.model("habits", HabitSchema)
module.exports = HabitModel