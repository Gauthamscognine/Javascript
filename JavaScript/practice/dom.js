document.querySelector("#sqbt").addEventListener("click",()=>{
    const no = document.getElementById("numinput").value;
    const res = document.getElementById("sqno");
    const square = no*no;
    res.textContent=`Square = ${square}`;
});



function* getid(){
    let i  = 1;
    while(true){
        yield i++;
    }
}
const gq = getid();
document.querySelector("#getidbtn").addEventListener("click",()=>{
    const resdiv = document.getElementById("ids")
    let x = gq.next().value;
    resdiv.innerHTML = `<h1> ${x} </h1> `
});

document.getElementById("colorbtn").addEventListener("click",() =>{
    const colors = ["lightblue", "lightgreen", "lightpink", "yellow", "lavender"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randomIndex];
})


document.getElementById("libtn").addEventListener("click",() =>{
    const input = document.getElementById("idlist");
    const list = document.getElementById("itemlist");

    const text = input.value.trim();
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", () => li.remove());
    list.appendChild(li);
    input.value = "";

});

