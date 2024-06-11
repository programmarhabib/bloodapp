import express from 'express';


//create errorHander
const errorHander = async (error, req,res, next) => {
    const status = res.status ? res.status : 500;
    res.status(status).json({message: error.message}) ;
}

//export errorHander
export default errorHander;