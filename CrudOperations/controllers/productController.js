function getProducts(req,res){
    res.send("this is product's get page");
}

function addProducts(req,res){
    res.send("this is product's add page");
}

function deleteProducts(req,res){
    res.send("this is product's delete page");
}
function updateProducts(req,res){
    res.send("this is product's update page");
}
module.exports = {getProducts,addProducts,deleteProducts,updateProducts};
