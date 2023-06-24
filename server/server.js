const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/book-routes')
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/indian-coders", { family: 4 })
    .then(() => {
        console.log("Db is connected")
    }).catch((e) => {
        console.log(e.message)
        console.log("Db is failed in connection")
    })


//middleware
app.use('/books', router)



app.listen("3001", () => {
    console.log("server is running !!")
})