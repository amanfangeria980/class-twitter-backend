const createPost=(req, res) => {
    res.send("createPost")
}

const deletePost=(req, res) => {
    res.send("deletePost")
}

const updatePost=(req, res) => {
    res.send("updatePost")
}

const searchPost=(req, res) => {
    res.send("searchPost")
}

const like=(req, res) => {
    res.send("like")
}

const comment=(req, res) => {
    res.send("comment")
}

const dislike=(req, res) => {
    res.send("dislike")
}

const deleteComment=(req, res) => {
    res.send("deleteComment")
}

const updateComment=(req, res) => {
    res.send("updateComment")
}

const shareuserdata=(req, res) => {
    res.send("shareuserdata")
}

const modifyuserdata=(req, res) => {
    res.send("modifyuserdata")
}

const savedPost=(req, res) => {
    res.send("savedPost")
}



module.exports={createPost,deletePost,updatePost,searchPost,like,comment,dislike,deleteComment,updateComment,shareuserdata,modifyuserdata,savedPost}