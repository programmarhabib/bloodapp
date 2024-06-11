import mongoose from "mongoose";

//create user schema

const userSchema = mongoose.Schema({
  name:{
    type:String,
    trim:true,
    required:true
  },
  email:{
    type:String,
    trim:true,
    unique:true
  },
  phone:{
    type:String,
    trim:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  photo:{
    type:String,
    trim:true,
    default:null,
  },
  accessTken:{
    type:String,
    trim:true,
    default:null,
  },
  isActivate:{
    type:Boolean,
    default:false,
  },
  isVerified:{
    type:String,
    default:false,
  },
  status:{
    type:Boolean,
    default:true,
  },
  trash:{
    type:Boolean,
    default:false
  }
},
{timestamps:true}
);

//export schema
export default mongoose.model('User', userSchema);