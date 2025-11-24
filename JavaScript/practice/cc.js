document.getElementById("sbtn").addEventListener("click",()=>{
    const result = document.getElementById("res");
    const person = {
        name:"gautham",
        class:"5"
    }
    result.textContent = `hello ${person.name}` 
    return
});