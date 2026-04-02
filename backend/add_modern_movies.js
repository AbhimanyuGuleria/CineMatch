const fs = require('fs');
const path = require('path');

const moviesFilePath = path.join(__dirname, 'movies.json');
let movies = JSON.parse(fs.readFileSync(moviesFilePath, 'utf8'));

// Generate 20 high-quality MODERN movies
const newMovies = [
    { title: "Dune", year: 2021, genres: ["Sci-Fi", "Adventure"], baseRating: 4.8, description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.", director: "Denis Villeneuve", runtime: 155, imdbId: "tt1160419" },
    { title: "Oppenheimer", year: 2023, genres: ["Biography", "Drama", "History"], baseRating: 4.9, description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.", director: "Christopher Nolan", runtime: 180, imdbId: "tt15398776" },
    { title: "Top Gun: Maverick", year: 2022, genres: ["Action", "Drama"], baseRating: 4.8, description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission.", director: "Joseph Kosinski", runtime: 130, imdbId: "tt1745960" },
    { title: "Everything Everywhere All at Once", year: 2022, genres: ["Action", "Adventure", "Comedy"], baseRating: 4.7, description: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes.", director: "Daniel Kwan & Daniel Scheinert", runtime: 139, imdbId: "tt6710474" },
    { title: "Spider-Man: Into the Spider-Verse", year: 2018, genres: ["Animation", "Action", "Adventure"], baseRating: 4.9, description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.", director: "Bob Persichetti", runtime: 117, imdbId: "tt4633694" },
    { title: "Spider-Man: Across the Spider-Verse", year: 2023, genres: ["Animation", "Action", "Adventure"], baseRating: 4.8, description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.", director: "Joaquim Dos Santos", runtime: 140, imdbId: "tt9362722" },
    { title: "The Batman", year: 2022, genres: ["Action", "Crime", "Drama"], baseRating: 4.6, description: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.", director: "Matt Reeves", runtime: 176, imdbId: "tt1877830" },
    { title: "Knives Out", year: 2019, genres: ["Comedy", "Crime", "Drama"], baseRating: 4.5, description: "A detective investigates the death of a patriarch of an eccentric, combative family.", director: "Rian Johnson", runtime: 130, imdbId: "tt8946378" },
    { title: "John Wick: Chapter 4", year: 2023, genres: ["Action", "Crime", "Thriller"], baseRating: 4.7, description: "John Wick uncovers a path to defeating The High Table but must face a new enemy with powerful alliances across the globe.", director: "Chad Stahelski", runtime: 169, imdbId: "tt10366206" },
    { title: "Arrival", year: 2016, genres: ["Drama", "Mystery", "Sci-Fi"], baseRating: 4.6, description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.", director: "Denis Villeneuve", runtime: 116, imdbId: "tt2543164" },
    { title: "Get Out", year: 2017, genres: ["Horror", "Mystery", "Thriller"], baseRating: 4.5, description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him reaches a boiling point.", director: "Jordan Peele", runtime: 104, imdbId: "tt5052448" },
    { title: "1917", year: 2019, genres: ["Action", "Drama", "War"], baseRating: 4.7, description: "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.", director: "Sam Mendes", runtime: 119, imdbId: "tt8579674" },
    { title: "Barbie", year: 2023, genres: ["Adventure", "Comedy", "Fantasy"], baseRating: 4.4, description: "Barbie suffers a crisis that leads her to question her world and her existence.", director: "Greta Gerwig", runtime: 114, imdbId: "tt1517268" },
    { title: "Logan", year: 2017, genres: ["Action", "Drama", "Sci-Fi"], baseRating: 4.8, description: "In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.", director: "James Mangold", runtime: 137, imdbId: "tt3315342" },
    { title: "A Quiet Place", year: 2018, genres: ["Drama", "Horror", "Sci-Fi"], baseRating: 4.3, description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.", director: "John Krasinski", runtime: 90, imdbId: "tt6644200" },
    { title: "Dune: Part Two", year: 2024, genres: ["Sci-Fi", "Adventure"], baseRating: 4.9, description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.", director: "Denis Villeneuve", runtime: 166, imdbId: "tt15239678" },
    { title: "Guardians of the Galaxy Vol. 3", year: 2023, genres: ["Action", "Adventure", "Comedy"], baseRating: 4.6, description: "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own.", director: "James Gunn", runtime: 150, imdbId: "tt6791350" },
    { title: "Godzilla Minus One", year: 2023, genres: ["Action", "Drama", "Sci-Fi"], baseRating: 4.8, description: "Post-war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.", director: "Takashi Yamazaki", runtime: 124, imdbId: "tt23289160" },
    { title: "Blade Runner 2049", year: 2017, genres: ["Action", "Drama", "Sci-Fi"], baseRating: 4.7, description: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.", director: "Denis Villeneuve", runtime: 164, imdbId: "tt1856101" },
    { title: "Avatar: The Way of Water", year: 2022, genres: ["Action", "Adventure", "Fantasy"], baseRating: 4.4, description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.", director: "James Cameron", runtime: 192, imdbId: "tt1630029" }
];

// Start IDs after the maximum current ID
let maxId = 0;
movies.forEach(m => {
    if (m.id > maxId) maxId = m.id;
});

// Check for duplicates
const existingTitles = new Set(movies.map(m => m.title.toLowerCase()));
const filteredNewMovies = newMovies.filter(m => !existingTitles.has(m.title.toLowerCase()));

console.log(`Adding ${filteredNewMovies.length} NEW modern movies...`);

filteredNewMovies.forEach((m, i) => {
    m.poster = ``;
    m.backdrop = ``;
    m.id = maxId + i + 1;
    movies.push(m);
});

fs.writeFileSync(moviesFilePath, JSON.stringify(movies, null, 2), 'utf8');

console.log(`Successfully appended movies! New count: ${movies.length}. Please run update_posters.js now.`);
