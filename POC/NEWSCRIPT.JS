const API_KEY = "943e6fc6"; 

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


    createPost();
    function createPost() {
        

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ type, year })
        })
        .then(res => res.json())
        .then(data => console.log("Created:", data))
        .catch(err => console.log(err));
    }


        try {
            const res =  await fetch(url);
            const data =  await res.json();


            console.log("URL sent:", url);
            console.log("FULL API RESPONSE:", data);

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
                </div>
            `)


        } catch (error) {
            resultsDiv.innerHTML = "<p>Error fetching data.</p>";
        }
    }

    // complex model , dom api , aasynch , fucntion types 