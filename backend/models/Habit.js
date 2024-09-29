const mongoose = require("mongoose")

const HabitSchema = new mongoose.Schema({
    habitName: String,
    //streaks stored, personal streaks and friend streaks (combined)
    goal: String,
    friends: {friend: String}
    /*imageList: [{
        dailyImage: String,
        imageTime: Number
    }],*/
    //for demo, add images to preset daily image list
    //just have user break their own streak to clear image list, compare image time with most recent
    
}) 
const HabitModel = mongoose.model("habits", HabitSchema)
module.exports = HabitModel