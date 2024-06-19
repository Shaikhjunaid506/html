const movies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        genre: ["Drama"],
        cast: ["Tim Robbins", "Morgan Freeman"],
        poster: "https://via.placeholder.com/150x225.png?text=The+Shawshank+Redemption",
        release_date: "1994-09-23",
        overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        id: 2,
        title: "The Godfather",
        genre: ["Crime", "Drama"],
        cast: ["Marlon Brando", "Al Pacino"],
        poster: "https://via.placeholder.com/150x225.png?text=The+Godfather",
        release_date: "1972-03-24",
        overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: ["Action", "Crime", "Drama"],
        cast: ["Christian Bale", "Heath Ledger"],
        poster: "https://via.placeholder.com/150x225.png?text=The+Dark+Knight",
        release_date: "2008-07-18",
        overview: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
    }
];

const searchBar = document.getElementById('search-bar');
const moviesGrid = document.getElementById('movies-grid');
const movieDetails = document.getElementById('movie-details');

searchBar.addEventListener('keyup', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));
    displayMovies(filteredMovies);
});

function displayMovies(movies) {
    moviesGrid.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.addEventListener('click', () => displayMovieDetails(movie));
        
        const moviePoster = document.createElement('img');
        moviePoster.classList.add('movie-poster');
        moviePoster.src = movie.poster;
        moviePoster.alt = movie.title;
        
        movieCard.appendChild(moviePoster);
        moviesGrid.appendChild(movieCard);
    });
}

function displayMovieDetails(movie) {
    movieDetails.classList.remove('hidden');
    movieDetails.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h2>${movie.title}</h2>
        <p><strong>Release Date:</strong> ${movie.release_date}</p>
        <p><strong>Genre:</strong> ${movie.genre.join(', ')}</p>
        <p><strong>Cast:</strong> ${movie.cast.join(', ')}</p>
        <p><strong>Overview:</strong> ${movie.overview}</p>
    `;
}


displayMovies(movies);
