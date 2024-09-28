const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const HabitModel = require("./models/Habit");
//const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());
//const db = connectDB();

mongoose.connect("mongodb://localhost:27017/test");
//habit stuff
app.get("/getHabit", (req, res) => {
  HabitModel.find()
    .then((habits) => res.json(habits))
    .catch((err) => res.json(err));
});

//user stuff
app.get("/getUser", (req, res) => {
  UserModel.find()
  .then((result) => res.json(result))
  .catch((err) => res.json(err));
});

app.put("/updateUserHabits/:habit", (req, res) => {
    const {habit} = req.params;
    console.log(habit)
    
    UserModel.findOneAndUpdate({name: "John"}, {habits: {hab: habit, streak: 0}} )
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

app.listen(3001, () => {
  console.log("Server is running");
});
