import mongoose from "mongoose";

//create mongodb connection
const mongoDBConnection = async ()=>{
  try {
      const connection = await mongoose.connect(process.env.MONGO_STRING);
      console.log(`MongoDB connection succesfull`.bgBlue.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
}

// export connections
export default mongoDBConnection;