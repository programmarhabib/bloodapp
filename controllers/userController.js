

import bcrypt from 'bcrypt';
import expressAsyncHandler from "express-async-handler";
import User from "../models/User.js";
import { deleteCloudinary, uploadCloudinary } from '../utils/cloudinary.js';
import { findPublicId, vaildMobilenum, validateEmail } from '../helpers/helper.js';


/**
 * @description get all user data
 * @method Get
 * @route /api/v1/user
 * @access public
*/


export const getAllUsers =expressAsyncHandler(async(req, res)=>{

  //get all users
  const users = await User.find();

  //check user data
  if(users.length > 0){
    res.status(200).json({users, message: "User data loaded succesfully."});
  }else{
    res.status(404).json({message: "User data not found"});
  }
});

/**
 * @description get Single user data
 * @method Get
 * @route /api/v1/user:id
 * @access public
*/


export const getSingleUser =expressAsyncHandler(async(req, res)=>{
      
});

/**
 * @description create user data
 * @method Post
 * @route /api/v1/user/
 * @access public
*/


export const CreateUser =expressAsyncHandler(async(req, res)=>{
  const {name, email, password,phone }= req.body;
  
  //validation
  if(!name || !email || !password || !phone){
    return res.status(400).json({message: "Äll fields are required"});
  };

  //check valid email
  if(!validateEmail(email)){
    return res.status(400).json({message: "Invalid Email address"})
  }

  //check valid phone number
  if(!vaildMobilenum(phone)){
    return res.status(400).json({message: "Invailid Phone number"})
  }

//check email existence
const checkemail = await User.findOne({email});
 if(checkemail){
    return res.status(400).json({message: "Email already exists"});
 }

 //check phone 
 const checkphone = await User.findOne({phone});
 if (checkphone) {
    return res.status(400).json({message: "Phone already exists"});
 }

  //hash pasword
  const hashPass = await bcrypt.hash(password, 10);

  //check file
  let fileData = null;
  if (req.file) {
    const UP_data = await uploadCloudinary(req.file.path);
    fileData = UP_data.secure_url;
  }

  
  //create new user
  const user = await User.create({
    name,email,phone,password:hashPass,photo:fileData
  })

  //response
  res.status(201).json({user:user, message:"User data created successfully"});


});

/**
 * @description Delete user data
 * @method Delete
 * @route /api/v1/user/:id
 * @access public
*/


export const DeleteUser =expressAsyncHandler(async(req, res)=>{

    //get delete user id
    const {id} = req.params;

    // delete user from database
    const deleteUser = await User.findByIdAndDelete(id);

    //delete cloud file
    await deleteCloudinary(findPublicId(deleteUser.photo));

    //response
    res.status(200).json({message: "User data deleted successfully."});
});

/**
 * @description Update user data
 * @method Put/patch
 * @route /api/v1/user/:id
 * @access public
*/


export const UpdateUser =expressAsyncHandler(async(req, res)=>{
    // get update user id
      const {id} = req.params;

      //get update user data
      const {name, email, phone} = req.body;

 
  //check valid email
  if(!validateEmail(email)){
    return res.status(400).json({message: "Invalid Email address"})
  }

  //check valid phone number
  if(!vaildMobilenum(phone)){
    return res.status(400).json({message: "Invailid Phone number"})
  }


  //update data
      const updateUser = await User.findByIdAndUpdate(
        id, {name, email, phone}, {new: true}

      );
    res.status(200).json({updateUser, message:"data updated successfully"});
});