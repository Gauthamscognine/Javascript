Basics of HTTPS
url uniform resource locator
http ; HTTP = HyperText Transfer Protocol
202 ok 
404 not founf When the requested resource does not exist.
500 internal server error When the server crashes or fails.

CLINET SERVER ARCHITECTURE 
2 tier = deskptop app sql and queries 
3 tier - application server in middle 
n tier = multiple tier  load balancer api gateway , app servers , authentication 


--------------------------------------------------------------------------------------------------------------------------------




⚠ Node is NOT a language
⚠ Node is NOT a framework
✅ Node is a runtime (like JVM for Java, Python Interpreter for Python)

In 2009, Ryan Dahl asked one BIG question:
"Why can't JavaScript run on servers?"



Node.js is best for I/O-heavy, real-time, and scalable network applications, but not ideal for CPU-intensive workloads unless offloaded to worker threads or other services.




//COMMON JS  AND ESMODULES THING FROM HERE 

With that inclusion, Node.js treats all files inside that package as ES modules, and you won’t have to change the file to a .mjs extension.
ES Modules (import / export) were introduced in:
✅ ECMAScript 2015 (ES6)
✅ Year: 2015

 y did we ne esmodule when we laready had commonjs thing?
1️⃣ CommonJS is NOT JavaScript standard

It was:
Created for Node by community
Not part of ECMAScript spec
Browser never supported it
This meant:
❌ Node had one way
❌ Browser had another (none earlier)

Browser has:
No require
No module.exports
So frontend and backend used different standards.

---------------------------------------------------------------------------------------------------------------------------------
// EXPRESS JS FROM HERE 

before express developers used to write huge lines of simple logic code in pur node js structure . 
Problems:
❌ Routing is ugly
❌ No middleware support
❌ No folder structure
❌ No easy body parsing
❌ No error handling system
❌ No scalability


📜 History of Express
Created in 2010
Open-sourced in 2011
Now maintained by OpenJS Foundation

Express is a thin layer built on top of Node.js HTTP module.

-----------------------------------------------------------------------------------------------------------------------------
File System & Path modules	Read/write files and directories asynchronously.





Intro to Node.js & Setting up Environment	Understand Node.js architecture, event loop, and where to use Node.js. Install Node, npm, and configure VS Code.
npm and package.json & Modules & Imports	Manage dependencies, versioning, and run scripts. Use CommonJS and ES modules effectively.
File System & Path modules	Read/write files and directories asynchronously.


HTTP Server & Routing & REST API Basics (CRUD)	Create a simple HTTP server and route handling. Build a basic CRUD API using Express.js.
npm install --no-package-lock


-------------------------------------------------------------------------------------------------------------------------------------
representation state transfer, json, http methods , response codes , modularity 
soap api , xm; , 
graph ql , facebook , 
grpc , google , http , bnary protocol , 
websocket , connection , 
use cases of various apis, 
web hooks , 

processor rwquires 

,load processor 

diffrent params in rest api . 


-------------------------------------------------------------------------------------------------------------------------------------