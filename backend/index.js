const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/User")
const HabitModel = require("./models/Habit")
const FriendsModel = require("./models/Friends")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/test")

app.get("/getHabit")
