require('dotenv').config()

// require express package 
const express = require('express')

// require workouts.js 
const workoutRoutes = require('./routes/workouts')

// require mongoose
const mongoose = require('mongoose')

// start up the express app
// required express isnow store in const app
const app = express()


// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path ,req.method)
    next()
})

// responsible of get request 
// forward slash mean when go to local host port 4000

// routs
app.use('/api/workouts',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to the DB & listning on port' ,process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// req   -- request object (which has information about request)
// res  -- respons object (which we use to send a response back to clients)

// nodemon is a tool that helps develop Node. js based applications by automatically restarting the node application when file changes in the directory are detected. 


