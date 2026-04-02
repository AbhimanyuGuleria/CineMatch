const fs = require('fs');
const path = require('path');

const moviesFilePath = path.join(__dirname, 'movies.json');
let movies = JSON.parse(fs.readFileSync(moviesFilePath, 'utf8'));

// Generate 20 more massive modern blockbusters
const newMovies = [
    { title: "Spider-Man: No Way Home", year: 2021, genres: ["Action", "Adventure", "Sci-Fi"], baseRating: 4.8, description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.", director: "Jon Watts", runtime: 148, imdbId: "tt10872600" },
    { title: "Deadpool & Wolverine", year: 2024, genres: ["Action", "Comedy", "Sci-Fi"], baseRating: 4.7, description: "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.", director: "Shawn Levy", runtime: 127, imdbId: "tt6263850" },
    { title: "Mission: Impossible - Fallout", year: 2018, genres: ["Action", "Adventure", "Thriller"], baseRating: 4.8, description: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission goes wrong.", director: "Christopher McQuarrie", runtime: 147, imdbId: "tt4560436" },
    { title: "The Super Mario Bros. Movie", year: 2023, genres: ["Animation", "Adventure", "Comedy"], baseRating: 4.5, description: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.", director: "Aaron Horvath", runtime: 92, imdbId: "tt6718170" },
    { title: "Inside Out 2", year: 2024, genres: ["Animation", "Adventure", "Comedy"], baseRating: 4.7, description: "A sequel that features Riley entering puberty and experiencing brand new, more complex emotions as a result.", director: "Kelsey Mann", runtime: 96, imdbId: "tt22022452" },
    { title: "Poor Things", year: 2023, genres: ["Comedy", "Drama", "Romance"], baseRating: 4.6, description: "The incredible tale about the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.", director: "Yorgos Lanthimos", runtime: 141, imdbId: "tt14230458" },
    { title: "Killers of the Flower Moon", year: 2023, genres: ["Crime", "Drama", "History"], baseRating: 4.7, description: "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.", director: "Martin Scorsese", runtime: 206, imdbId: "tt5537002" },
    { title: "Ford v Ferrari", year: 2019, genres: ["Action", "Biography", "Drama"], baseRating: 4.8, description: "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.", director: "James Mangold", runtime: 152, imdbId: "tt2404435" },
    { title: "Tenet", year: 2020, genres: ["Action", "Sci-Fi", "Thriller"], baseRating: 4.4, description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.", director: "Christopher Nolan", runtime: 150, imdbId: "tt10048342" },
    { title: "No Time to Die", year: 2021, genres: ["Action", "Adventure", "Thriller"], baseRating: 4.5, description: "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.", director: "Cary Joji Fukunaga", runtime: 163, imdbId: "tt2382320" },
    { title: "The Northman", year: 2022, genres: ["Action", "Adventure", "Drama"], baseRating: 4.4, description: "From visionary director Robert Eggers comes an action-filled epic that follows a young Viking prince on his quest to avenge his father's murder.", director: "Robert Eggers", runtime: 137, imdbId: "tt11138512" },
    { title: "The Whale", year: 2022, genres: ["Drama"], baseRating: 4.6, description: "A reclusive, morbidly obese English teacher attempts to reconnect with his estranged teenage daughter.", director: "Darren Aronofsky", runtime: 117, imdbId: "tt13833688" },
    { title: "Furiosa: A Mad Max Saga", year: 2024, genres: ["Action", "Adventure", "Sci-Fi"], baseRating: 4.7, description: "The origin story of renegade warrior Furiosa before her encounter and teamup with Mad Max.", director: "George Miller", runtime: 148, imdbId: "tt12037194" },
    { title: "Civil War", year: 2024, genres: ["Action", "Thriller"], baseRating: 4.5, description: "A journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.", director: "Alex Garland", runtime: 109, imdbId: "tt17279496" },
    { title: "Society of the Snow", year: 2023, genres: ["Adventure", "Biography", "Drama"], baseRating: 4.7, description: "The flight of a rugby team crashes on a glacier in the Andes. The few passengers who survive the crash find themselves in one of the world's toughest environments to survive.", director: "J.A. Bayona", runtime: 144, imdbId: "tt16277242" },
    { title: "The Super Mario Bros. Movie", year: 2023, genres: ["Animation", "Adventure", "Comedy"], baseRating: 4.4, description: "A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.", director: "Aaron Horvath", runtime: 92, imdbId: "tt6718170" },
    { title: "Dune", year: 2021, genres: ["Action", "Adventure", "Sci-Fi"], baseRating: 4.8, description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.", director: "Denis Villeneuve", runtime: 155, imdbId: "tt1160419" },
    { title: "Asteroid City", year: 2023, genres: ["Comedy", "Drama", "Romance"], baseRating: 4.2, description: "Following a writer on his world famous fictional play about a grieving father who travels with his tech-obsessed family to small rural Asteroid City to compete in a junior stargazing event.", director: "Wes Anderson", runtime: 105, imdbId: "tt14230388" },
    { title: "The Creator", year: 2023, genres: ["Action", "Adventure", "Sci-Fi"], baseRating: 4.3, description: "Against the backdrop of a war between humans and robots with artificial intelligence, a former soldier finds the secret weapon.", director: "Gareth Edwards", runtime: 133, imdbId: "tt11858890" },
    { title: "Challengers", year: 2024, genres: ["Drama", "Romance", "Sport"], baseRating: 4.6, description: "Tashi, a tennis player-turned-coach, has taken her husband, Art, and transformed him from a mediocre player into a world-famous Grand Slam champion.", director: "Luca Guadagnino", runtime: 131, imdbId: "tt16411704" }
];

// Start IDs after the maximum current ID
let maxId = 0;
movies.forEach(m => {
    if (m.id > maxId) maxId = m.id;
});

// Check for duplicates
const existingTitles = new Set(movies.map(m => m.title.toLowerCase()));
const filteredNewMovies = newMovies.filter(m => !existingTitles.has(m.title.toLowerCase()));

console.log(`Adding ${filteredNewMovies.length} NEW super-modern movies...`);

filteredNewMovies.forEach((m, i) => {
    m.poster = ``;
    m.backdrop = ``;
    m.id = maxId + i + 1;
    movies.push(m);
});

fs.writeFileSync(moviesFilePath, JSON.stringify(movies, null, 2), 'utf8');

console.log(`Successfully appended movies! New count: ${movies.length}. Please run update_posters.js now.`);
