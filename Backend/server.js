const express=require('express')
const dotenv=require('dotenv').config()
const colors= require('colors')
const {errorHandler}= require('./middleware/errorMiddleware')
const connectDB=require('./config/db')
const { logger, stream } = require("./utils/logger.utils");
const morgan = require("morgan");




const port=process.env.PORT ||5000



//console.log(PORT)
connectDB()
const app= express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/user', require('./routes/userRoutes'))
app.use(errorHandler)


const initializeMiddlewares = ()=>{
    app.use(morgan('dev',{ stream }));
}

initializeMiddlewares();
app.listen(port, ()=> console.log(`app listening on port ${port}`))
