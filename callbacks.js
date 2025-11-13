//call back is basically a function being passed to another function 
function caldis(ori , dis ){
     return ori  - (ori/100)*dis;
    // console.log(total);
}

function getbill(callback){
    console.log(callback(100,10));
}
getbill(caldis);

//---------------------------------------------------------------------------------------------

function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

doSomething(function() {
  console.log("Callback executed!");
});

//-----------------------------------------------------------------------------------------------------

//call backs can be synch and also asynch , when we make use of a specifc async function then a callbakc will be asyn .
// below is a async callbakc and above are the sync callbacks  
function checkcallback(){
    setTimeout(()=>{
        console.log("this is chintu here in callback ")
    },5000)
}
checkcallback();
console.log("checking for  call back  ")

//-----------------------------------------------------------------------------------