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

diff between oarams . in path and query param sbth for get itself right , y both ? 


-------------------------------------------------------------------------------------------------------------------------------------
🔔 What are Webhooks?

Webhooks are automatic API calls sent by one application to another when something happens.
Instead of YOU requesting data again and again, the server pushes data to you instantl

EVENT happens (payment, signup, order)

SERVER triggers webhook  
→ Sends POST request  
→ To YOUR API endpoint  

YOUR backend receives data  
→ Processes it  
→ Stores / replies OK

Webhook = Server calling YOUR API when an event happens.

------------------------------------------------------------------------------------------------------------------------------------
✅ 1. REST API (Most common – Default choice)
📌 What it is:

Normal HTTP-based API using methods like GET, POST, PUT, DELETE.

✅ When to use:

CRUD apps (Create, Read, Update, Delete)

Websites & mobile apps

Dashboards

Basic backend services

✅ 2. GraphQL API (Frontend needs flexible data)
📌 What it is:

Client decides what data it wants.

✅ When to use:

Complex frontend queries

Mobile optimization

Single endpoint needs

Data aggregation systems


✅ 3. WebSocket API (Realtime communication)
📌 What it is:

Two-way persistent connection.

✅ When to use:

Live chat apps

Multiplayer games

Stock trading apps

GPS tracking

Online classrooms


📌 What it is:

Server calls YOUR API on events.

✅ When to use:

Payment confirmations

Signup events

Delivery tracking

Email opened clicks

Build triggers

✅ Example:


✅ 6. SOAP API (Legacy systems)
📌 What it is:

XML protocol-based API.

✅ When to use:

Banking systems

Government systems

Enterprise systems

-----------------------------------------------------------------------------------------------------------------------------------

set UV_THREADPOOL_SIZE=8
node app.js,


✅ What happens if you increase thread pool?
✅ GOOD

More parallel fs/crypto tasks

Faster heavy upload/download

Improves throughput

❌ BAD

Too many threads = context switching

CPU overload

RAM usage spikes

Slower under load


✅ What factors decide Thread Pool size?
🔍 1. CPU Cores
Good rule:
thread pool ≤ CPU cores



✅ 4. Experience-Based Limit (Not random)

The Node.js team ran:

Load tests

Stress tests

Enterprise benchmarks

Cloud testing

They observed:

Past ~100 threads, performance worsens instead of improving

So they fixed 128.