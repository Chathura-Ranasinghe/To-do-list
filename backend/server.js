require('dotenv').config()

//require express package 
const express = require('express')

//start up the express app
// required express isnow store in const app
const app = express()


//middleware
app.use((req, res, next) => {
    console.log(req.path ,req.method)
    next()
})

//responsible of get request 
//forward slash mean when go to local host port 4000
//routs
app.get('/', (req, res) =>{
    res.json({mssg: 'welcome to the app'})
})

//req   -- request object (which has information about request)
// res  -- respons object (which we use to send a response back to clients)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listning on port' ,process.env.PORT)
})

//nodemon is a tool that helps develop Node. js based applications by automatically restarting the node application when file changes in the directory are detected. 


