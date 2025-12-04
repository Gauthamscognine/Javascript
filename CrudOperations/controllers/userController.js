function getUser(req,res){
    res.send("this is User's get page");
}

function addUser(req,res){
    res.send("this is User's add page");
}

function deleteUser(req,res){
    res.send("this is User's delete page");
}
function updateUser(req,res){
    res.send("this is User's update page");
}
module.exports = {getUser,addUser,deleteUser,updateUser};