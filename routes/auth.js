const express=require('express');

const auth=express.Router();
const {login,signup,logout,reset}=require("../functions/auth")

auth.get('/login', login)

auth.post('/signup', signup)
auth.get('/logout', logout)
auth.get('/reset', reset)


module.exports={auth}