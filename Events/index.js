const EventEmitter = require('events');
const { emitWarning } = require('process');
const  emitter = new EventEmitter();

emitter.once("greet",(user)=>{
    console.log(`hello this is ${user.name} under ${user.role} and this is "once "   `);
})// only emits once , but if u call the emit function again , this wont be clled . 


emitter.on("greet",(user)=>{
    console.log(`hello this is ${user.name} under ${user.role} and this is "on" `);
})

function checkoff(user){
    console.log("this is for checking thr off operation in events ")
}
emitter.on("greet",checkoff)
emitter.emit("greet",{name:"gautham kedia",role :"open source"});
emitter.emit("greet",{name:"gautham kedia",role :"open source"});
emitter.off("greet",checkoff);
emitter.emit("greet",{name:"gautham kedia",role :"open source"})
emitter.on("greet",checkoff);
emitter.emit("greet",{name:"gautham kedia",role :"open source"})

console.log(emitter.listenerCount("greet"))