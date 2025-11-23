const api = "943e6fc6";

document.getElementById("searchBtn").addEventListener("click",fetchmov)
function fetchmov() {
    const name= document.getElementById("searchInput").value.trim();
    const type  = document.getElementById("typeFilter").value;
    const year = document.getElementById("yearFilter").value;
    const result= document.getElementById("results");
    if(!name){
        result.innerHTML = `<h1> please enter a name </h1>`;
        return;
    }

    let url = `https://www.omdbapi.com/?apikey=${api}&s=${name}`;

    if (type) url += `&type=${type}`;
    if (year) url += `&y=${year}`;

    getres();

    function getres(){
    fetch(url).then(res=>{
        return res.json()
    })
    .then(data =>{
        if(data.Response==="False"){
        result.innerHTML = `<h1>${data.Error} </h1>`;
        return;
    }

    let html = "";
    
    for(let i=0;i<data.Search.length;i++){
        let movies = data.Search[i];
        html += `
        <div class  = "card">
        <img src = "${movies.Poster}">
        <p>${movies.Title}</p>
        <p>${movies.Year}</p>
        <p>${movies.Type}</p>
        </div>
     `;
    }
    result.innerHTML = html;
    })
    .catch(error => {
        result.innerHTML = `<h1>error fetchig data </h1>`
        return;
    })
  }
}


