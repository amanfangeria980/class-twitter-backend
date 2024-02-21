const express=require('express');
const {createPost,deletePost,updatePost,searchPost,like,comment,dislike,deleteComment,updateComment,shareuserdata,modifyuserdata,savedPost}=require('../functions/others')
const others=express.Router();


others.get('/createPost',createPost)

others.get('/deletePost', deletePost)

others.get('/updatePost', updatePost)

others.get('/searchPost', searchPost)

others.get('/like', like)

others.get('/comment', comment)

others.get('/dislike', dislike)

others.get('/deleteComment', deleteComment)

others.get('/updateComment', updateComment)

others.get('/shareuserdata', shareuserdata)

others.get('/modifyuserdata', modifyuserdata)

others.get('/savedPost', savedPost)



module.exports={others}