const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/User")
const HabitModel = require("./models/Habit")
const FriendsModel = require("./models/Friends")
const connectDB = require('./config/db')

const app = express()
app.use(cors())
app.use(express.json())
const db = connectDB()

mongoose.connect("mongodb://localhost:27017/test")

app.get('/getHabit', (req, res) => {
    HabitModel.find()
    .then(habits => res.json(habits))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})