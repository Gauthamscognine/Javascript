const API_KEY = "fb24d69c";  // <-- Only your key here

document.getElementById("searchBtn").addEventListener("click", fetchMovies);

async function fetchMovies() {
    const query = document.getElementById("searchInput").value.trim();
    const type = document.getElementById("typeFilter").value;
    const year = document.getElementById("yearFilter").value;
    const resultsDiv = document.getElementById("results");

    if (!query) {
        resultsDiv.innerHTML = "<p>Please enter a movie name.</p>";
        return;
    }

    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;

    if (type) url += `&type=${type}`;
    if (year) url += `&y=${year}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.Response === "False") {
            resultsDiv.innerHTML = `<p>${data.Error}</p>`;
            return;
        }

        resultsDiv.innerHTML = data.Search.map(movie => `
            <div class="card">
                <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
                <p>Type: ${movie.Type}</p>
            </div>
        `).join("");

    } catch (error) {
        resultsDiv.innerHTML = "<p>Error fetching data.</p>";
    }
}
