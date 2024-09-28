const mongoose = require("mongoose")

const FriendSchema = new mongoose.Schema({
    name: String,
    pfp: binData,
    habitName: String, //which habit that friend is a part of
    habitStreak: Number //streak on that habit
})

const FriendsModel = mongoose.model("friends", FriendSchema)
module.exports = FriendsModel