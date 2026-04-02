const fs = require('fs');
const movieInfo = require('movie-info');

const moviesFilePath = './movies.json';
let movies = JSON.parse(fs.readFileSync(moviesFilePath, 'utf8'));

// The reliable base URL for TMDB images
const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';
const BASE_BACKDROP_URL = 'https://image.tmdb.org/t/p/w1280';

async function updateMovies() {
    console.log('Starting high-quality TMDB poster fetching using movie-info...');
    
    let updatedCount = 0;
    
    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];
        
        // We want to force refresh ANY movie that currently relies on Wikipedia uploads
        // or placehold.co or SVG data URIs so they all uniformally look flawless!
        const needsUpdate = !movie.poster || 
                           movie.poster.includes('placehold.co') || 
                           movie.poster.includes('wikimedia') || 
                           movie.poster.includes('data:image/');

        if (needsUpdate) {
            console.log(`[${i+1}/${movies.length}] Securing accurate TMDB poster for ${movie.title}...`);
            try {
                const info = await movieInfo(movie.title);
                if (info && info.poster_path) {
                    movie.poster = BASE_POSTER_URL + info.poster_path;
                    movie.backdrop = info.backdrop_path ? (BASE_BACKDROP_URL + info.backdrop_path) : movie.poster;
                    console.log(`   -> Found TMDB match: ${movie.poster}`);
                    updatedCount++;
                } else {
                    console.log(`   -> No TMDB visual found, leaving gracefully handled placeholder.`);
                    movie.poster = ""; 
                }
            } catch (e) {
                console.log(`   -> Err: ${e.message}`);
                movie.poster = "";
            }
            // Small delay to be polite to the underlying APIs
            await new Promise(r => setTimeout(r, 400));
        }
    }
    
    fs.writeFileSync(moviesFilePath, JSON.stringify(movies, null, 2), 'utf8');
    console.log(`Successfully restored TMDB posters for ${updatedCount} movies!`);
}

updateMovies();
