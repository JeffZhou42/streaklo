const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/User")
const HabitModel = require("./models/Habit")
const ObjectId = require('mongodb').ObjectId;

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/test")

app.get('/getHabit', (req, res) => {
    HabitModel.find()
    .then(habits => res.json(habits))
    .catch(err => res.json(err))
})

app.post('/getHabit', (req, res) => {
    const habit = req.body

    HabitModel.create(habit)
    .then(habits => res.json(habits))
    .catch(err => res.json(err))
})

app.delete('/getHabit/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)) {
        HabitModel.findByIdAndDelete({_id: new ObjectId(req.params.id)})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not delete the document'})
        })
    } else {
        res.status(500).json({error: 'Not a valid document ID.'})
    }

})

app.patch('/getHabit/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        HabitModel.findByIdAndUpdate({_id: new ObjectId(req.params.id)}, {$set: updates})
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({error: 'Could not update the document'})
        })
    } else {
        res.status(500).json({error: 'Not a valid document ID.'})
    }
})

app.listen(3001, () => {
    console.log("Server is running")
})

