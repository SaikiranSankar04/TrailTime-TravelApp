const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const TrailTimeModel = require('./models/User')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/TrailTime");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    TrailTimeModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.status(200).json({ message: "Success" });
                } else {
                    res.status(401).json({ message: "The password is incorrect" });
                }
            } else {
                res.status(404).json({ message: "Email not registered. Please register to continue" });
            }
        })
        .catch(err => res.status(500).json({ message: "Server error", error: err }));
});

app.post('/register', (req, res) => {
    TrailTimeModel.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).json({ message: "Error creating user", error: err }));
});

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
