fetch("http://localhost:550/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id : 111,
    job: "Developer , THIS IS Post "
  })
})
.then(res => res.text())
.then(data => console.log("Sent successfully"))
.catch(err => console.log(err));
