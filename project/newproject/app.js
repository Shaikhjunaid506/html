const API_KEY = 'd9ea5af4';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const moviesGrid = document.getElementById('movies-grid');
    const movieDetails = document.getElementById('movie-details');

    const fetchMovies = async (query) => {
        const response = await fetch(`${API_URL}&s=${query}`);
        const data = await response.json();
        return data.Search || [];
    };

    const displayMovies = (movies) => {
        moviesGrid.innerHTML = '';
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
            `;
            movieElement.addEventListener('click', () => {
                displayMovieDetails(movie.imdbID);
            });
            moviesGrid.appendChild(movieElement);
        });
    };

    const displayMovieDetails = async (id) => {
        const response = await fetch(`${API_URL}&i=${id}`);
        const movie = await response.json();
        movieDetails.classList.remove('hidden');
        movieDetails.innerHTML = `
            <h2>${movie.Title}</h2>
            <img src="${movie.Poster}" alt="${movie.Title}">
            <p><strong>Year:</strong> ${movie.Year}</p>
            <p><strong>Released:</strong> ${movie.Released}</p>
            <p><strong>Genre:</strong> ${movie.Genre}</p>
            <p><strong>Awards:</strong> ${movie.Awards}</p>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Writer:</strong> ${movie.Writer}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Rated:</strong> ${movie.Rated}</p>
            <p><strong>Runtime:</strong> ${movie.Runtime}</p>
            <p><strong>Language:</strong> ${movie.Language}</p>
            <p><strong>Country:</strong> ${movie.Country}</p>
            <p><strong>Metascore:</strong> ${movie.Metascore}</p>
            <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
            <p><strong>IMDB Votes:</strong> ${movie.imdbVotes}</p>
            <p><strong>BoxOffice:</strong> ${movie.BoxOffice}</p>
            <button id="close-details">Close</button>
        `;
        document.getElementById('close-details').addEventListener('click', () => {
            movieDetails.classList.add('hidden');
        });
        movieDetails.scrollIntoView({ behavior: 'smooth' });
    };

    searchBar.addEventListener('input', async () => {
        const query = searchBar.value;
        if (query.length > 2) {
            const movies = await fetchMovies(query);
            displayMovies(movies);
        } else {
            moviesGrid.innerHTML = '';
        }
    });
});
