const express=require('express')
const connectDB = require('./config/db')
const app=require('./app')


//for to get envvironment variable
const PORT =process.env.PORT

// Set up middleware to parse JSON
app.use(express.json())


// Connect to MongoDB.
connectDB()



// Start the server and listen on a specified port.
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})