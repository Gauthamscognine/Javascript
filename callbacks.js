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
// most of the callback async function are timers , Network / APINetwork / API , promises etc...... 
function checkcallback(){
    setTimeout(()=>{
        console.log("this is chintu here in callback ")
    },5000)
}
checkcallback();
console.log("checking for  call back  ")

//-----------------------------------------------------------------------------------

//Callback hell  -  It is a condition in which we have nested callback fucntion which will be hard to read , debug and also be hard to write 

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");

      setTimeout(() => {
        console.log("Done");

      }, 1000);
    }, 1000);
  }, 1000);

}, 1000);
//This call back hell also called as  “pyramid of doom” was painful to read, debug, and maintain.


// in order to avoid this we can make use of pr0mises which look more clean and readable . It is the succesor of callbacks.

