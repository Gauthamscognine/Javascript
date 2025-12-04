all the middle ware execute in order , and also the routes .

app.use((req, res) => {
  if(req.url === "/") res.send("Home")
  else if(req.url === "/login") res.send("Login")
  else if(req.url === "/profile") res.send("Profile")
  else res.send("404")
}); this happens if no routing 

1️⃣ What is Routing?
Routing = handling requests based on URL + HTTP method


2️⃣ What is express.Router()?

express.Router() is a tool to CREATE routes in separate files instead of the main file.


4. What Happens Internally?
When a request comes:
GET /about
Express internally:
Reads all registered routes
Matches HTTP method
Matches route path
Executes the first matching handler
Stops searching further

Order matters:
app.get("/profile", ...)
app.get("/profile", ...)  // second one never runs