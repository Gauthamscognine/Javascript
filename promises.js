// promise is basically like a placeholder which holds a a value in the future 
// Three stages are : 1, pending  , fulfilled , rejected 

const  promises  = new Promise((resoleve , reject ) =>{
    let tf = true;
    if(tf) resoleve("this is true ");
    else reject("u r wrong bro ")
});


promises
.then(result => console.log(result))
.catch(resu =>console.log(resu));


/// this is a smaple example of Promise chaining where the ouput of one promise i sent to another promise and then processed .

function getnum(){
    return new Promise(resolve =>{
        resolve(10);
    })
};

function sub(n){
    return new Promise(resolve =>{
        resolve(n-3);
    })
};

function out(num){
    return new Promise(resolve =>{
        resolve(num*10);
    })
};

getnum()
    .then(num =>{
        console.log(num)
        return sub(num)
    })
    .then(res=>{
        console.log(res)
        return out(res); 
    })
    .then(rest=>{
        console.log(rest) 
    });



