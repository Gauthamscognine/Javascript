document.getElementById("abtn").addEventListener("click",()=>{
    const id = document.getElementById("addid").value;
    const name = document.getElementById("addname").value.trim();
    const marks = document.getElementById("addmarks").value;
    fetch("http://localhost:2000/students",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        id:Number(id),
        name:name,
        marks:Number(marks)
        })
    })
    .then(res => res.json())
    .then(data => console.log("POST success:", data))
    .catch(err => console.log("ERROR:", err));
})

document.getElementById("dbtn").addEventListener("click",()=>{
    const id = document.getElementById("delid").value;

    fetch(`http://localhost:2000/students/${id}`,{
        method:"DELETE"
    })

    .then(res => console.log("DELETE success:", res))
    .catch(err => console.log("ERROR:", err));
});



document.getElementById("pbtn").addEventListener("click",()=>{
    const id = document.getElementById("putid").value;
    const name = document.getElementById("putname").value.trim();
    const marks = document.getElementById("putmarks").value;

    fetch(`http://localhost:2000/students/${id}`,{
        method:"PUT",   
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            id:Number(id),
            name:name,
            marks:Number(marks)
        })

    })
    .then(res => res.json())
    .then(data => console.log("put success:", data))
    .catch(err => console.log("ERROR:", err));

})




