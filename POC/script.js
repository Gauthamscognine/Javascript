// const API_KEY = "943e6fc6"; 

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
//             const res = await fetch(url);
//             const data = await res.json();


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
//                 </div>
//             `)


//         } catch (error) {
//             resultsDiv.innerHTML = "<p>Error fetching data.</p>";
//         }
//     }
//npm wh questions // camelcase or pascal case m when and where . 


const API_KEY = "943e6fc6"; 

document.getElementById("searchBtn").addEventListener("click", fetchMovies);

 function fetchMovies() {
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

    fetch(url)
    .then( res => {
        console.log("res is ",res)
        // console.log("resjson is ",res.json())
         return res.json()
    })
    .then(data => {
        console.log("URL sent:", url);
        console.log("FULL API RESPONSE:", data);

        if (data.Response === "False") {
            resultsDiv.innerHTML = `<p>${data.Error}</p>`;
            return;
        }

        let html = "";

        for (let i = 0; i < data.Search.length; i++) {
            const movie = data.Search[i];

            html += `
                <div class="card">
                <img src="${movie.Poster !== "N/A" ? movie.Poster : "No_Image_Available.jpg"}">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
                <p>Type: ${movie.Type}</p>
            </div>
            `;
        }
        resultsDiv.innerHTML = html;
        //for..of for list . 

    //     resultsDiv.innerHTML = data.Search.map(movie => `
    //         <div class="card">
    //             <img src="${movie.Poster !== "N/A" ? movie.Poster : "No_Image_Available.jpg"}">
    //             <h3>${movie.Title}</h3>
    //             <p>${movie.Year}</p>
    //             <p>Type: ${movie.Type}</p>
    //         </div>
    //     `).join("");  // IMPORTANT
    }
)
    .catch(error => {
        resultsDiv.innerHTML = "<p>Error fetching data.</p>";
    });
    }
    
    // without using join and map  , also cover js engine workflow . npm install , which version does it take and also test cases 
    //understand package.json and lock in detail .
    

































    
//     Response {
//   status: 200,
//   ok: true,
//   headers: Headers {},
//   body: ReadableStream
// }



// {
//   "Search": [...movies...],
//   "totalResults": "978",
//   "Response": "True"
// }

// data.Search     // Array of movie objects
// data.Response   // "True" or "False"
// data.Error      // Only when failure