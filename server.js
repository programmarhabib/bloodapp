import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import mongoDBConnection from './config/mongoDB.js';
import userRouter from './route/user.js';
import errorHander from './middlewares/errorHandler.js';

//initialization
 const app = express();
 dotenv.config();

//environment vars
const PORT = process.env.PORT || 9090;

//set middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//static folder
app.use(express.static("public"));

//rouuting
app.use("/api/v1/user", userRouter)

// error handlers
app.use(errorHander);
//app listen

app.listen(PORT, ()=>{
  mongoDBConnection();
  console.log(`Server is running on port ${PORT}`.bgGreen.black);
  
})