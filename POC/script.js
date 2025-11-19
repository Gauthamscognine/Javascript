const API_KEY = "33a7e8c1"; 

document.getElementById("searchBtn").addEventListener("click", fetchMovies);

async function fetchMovies() {
    const name = document.getElementById("searchInput").value.trim();
    const type = document.getElementById("typeFilter").value;
    const year = document.getElementById("yearFilter").value;
    const resultsDiv = document.getElementById("results");

    if(name===""){
        resultsDiv.innerHTML = `<p> Please enter a movie name </p>`
        return
    }

    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`;

    if (type) url += `&type=${type}`;
    if (year) url += `&y=${year}`;// query parameters 

        try {
            const data = fetch(url).then(re =>{
                return re.json();
            });// what if post and how do we implement it 
            // const data = await res.json();




            if (data.Response === "False") {// check value and type both 
                resultsDiv.innerHTML = `<p>${data.Error}</p>`;
                return;
            }

            resultsDiv.innerHTML = data.Search.map(movie => `
                <div class="card">
                    <img src="${movie.Poster !== "N/A" ? movie.Poster : "No_Image_Available.jpg"}">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                    <p>Type: ${movie.Type}</p>
                    <p> -----------------------------</p>
                </div>
            `)


        } catch (error) {
            resultsDiv.innerHTML = "<p>Error fetching data.</p>";
        }
    }
// try to implement without async and await // display iin the form of cards as in jio hotstar 
//npm wh questions // camelcase or pascal case m when and where . 






// const API_KEY = "33a7e8c1"; 

// document.getElementById("searchBtn").addEventListener("click", fetchMovies);

// async function fetchMovies() {
//     const name = document.getElementById("searchInput").value.trim();
//     const type = document.getElementById("typeFilter").value;
//     const year = document.getElementById("yearFilter").value;
//     const resultsDiv = document.getElementById("results");

//     if(name===""){
//         resultsDiv.innerHTML = `<p> Please enter a movie name </p>`
//         return
//     }

//     let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`;

//     if (type) url += `&type=${type}`;
//     if (year) url += `&y=${year}`;// query parameters 

//         try {
//             const res = await fetch(url);// what if post and how do we implement it 
//             console.log(res)
//             const data = await res.json();
//             console.log(data)
//             console.log("URL sent:", url);
//             console.log("FULL API RESPONSE:", data);

//             if (data.Response === "False") {// check value and type both 
//                 resultsDiv.innerHTML = `<p>${data.Error}</p>`;
//                 return;
//             }

//             resultsDiv.innerHTML = data.Search.map(movie => `
//                 <div class="card">
//                     <img src="${movie.Poster !== "N/A" ? movie.Poster : "No_Image_Available.jpg"}">
//                     <h3>${movie.Title}</h3>
//                     <p>${movie.Year}</p>
//                     <p>Type: ${movie.Type}</p>
//                     <p> -----------------------------</p>
//                 </div>
//             `)


//         } catch (error) {
//             resultsDiv.innerHTML = "<p>Error fetching data.</p>";
//         }
//     }
// // try to implement without async and await // display iin the form of cards as in jio hotstar 
// //npm wh questions // camelcase or pascal case m when and where . 