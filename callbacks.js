function caldis(ori , dis ){
     return ori  - (ori/100)*dis;
    // console.log(total);
}

function getbill(callback){
    console.log(callback(100,10));
}
getbill(caldis);


function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

doSomething(function() {
  console.log("Callback executed!");
});
