function discount(ori , dis){
    console.log(ori  - dis);
}
function getPrice(callback){
    discount(100,20);
}
getPrice(discount);