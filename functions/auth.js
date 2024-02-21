const login=(req, res) => {
    res.send("Login")
}

const signup=(req, res) => {
    res.send("signup")
}
const logout=(req, res) => {
    res.send("logout")
}
const reset=(req, res) => {
    res.send("reset")
}


module.exports={login,signup,logout,reset}