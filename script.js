const API_URL = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname === '')
    ? 'http://localhost:5000'
    : 'https://your-render-backend-url.onrender.com'; // Update after deploying to Render

let movieDatabase = [];

// Fetch movies from backend API or use fallback
async function loadMovies() {
    try {
        console.log('Fetching movies from:', `${API_URL}/api/movies`);
        const response = await fetch(`${API_URL}/api/movies`);
        if (!response.ok) throw new Error('Failed to fetch movies');
        movieDatabase = await response.json();
        console.log('Loaded', movieDatabase.length, 'movies from API');
        initializeApp();
    } catch (error) {
        console.warn('Could not load from API, using fallback movies:', error);
        // Fallback to hardcoded movies
        movieDatabase = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        genres: ["Drama"],
        poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        baseRating: 4.8,
        description: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison.",
        director: "Frank Darabont",
        runtime: 142,
        imdbId: "tt0111161"
    },
    {
        id: 2,
        title: "The Godfather",
        year: 1972,
        genres: ["Crime", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        baseRating: 4.7,
        description: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.",
        director: "Francis Ford Coppola",
        runtime: 175,
        imdbId: "tt0068646"
    },
    {
        id: 3,
        title: "Pulp Fiction",
        year: 1994,
        genres: ["Crime", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        baseRating: 4.6,
        description: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper.",
        director: "Quentin Tarantino",
        runtime: 154,
        imdbId: "tt0110912"
    },
    {
        id: 4,
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Crime", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
        baseRating: 4.7,
        description: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations.",
        director: "Christopher Nolan",
        runtime: 152,
        imdbId: "tt0468569"
    },
    {
        id: 5,
        title: "Forrest Gump",
        year: 1994,
        genres: ["Drama", "Romance", "Comedy"],
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
        baseRating: 4.5,
        description: "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do.",
        director: "Robert Zemeckis",
        runtime: 142,
        imdbId: "tt0109830"
    },
    {
        id: 6,
        title: "Inception",
        year: 2010,
        genres: ["Sci-Fi", "Action", "Thriller"],
        poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
        baseRating: 4.6,
        description: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered impossible.",
        director: "Christopher Nolan",
        runtime: 148,
        imdbId: "tt1375666"
    },
    {
        id: 7,
        title: "The Matrix",
        year: 1999,
        genres: ["Sci-Fi", "Action"],
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
        baseRating: 4.5,
        description: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        director: "The Wachowskis",
        runtime: 136,
        imdbId: "tt0133093"
    },
    {
        id: 8,
        title: "Goodfellas",
        year: 1990,
        genres: ["Crime", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/sw7mordbZxgITU877yTpZCud90M.jpg",
        baseRating: 4.6,
        description: "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age.",
        director: "Martin Scorsese",
        runtime: 145,
        imdbId: "tt0099685"
    },
    {
        id: 9,
        title: "Interstellar",
        year: 2014,
        genres: ["Sci-Fi", "Drama", "Adventure"],
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        baseRating: 4.5,
        description: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        director: "Christopher Nolan",
        runtime: 169,
        imdbId: "tt0816692"
    },
    {
        id: 10,
        title: "The Silence of the Lambs",
        year: 1991,
        genres: ["Thriller", "Crime", "Horror"],
        poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
        baseRating: 4.5,
        description: "Clarice Starling is a top student at the FBI's training academy. Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath.",
        director: "Jonathan Demme",
        runtime: 119,
        imdbId: "tt0102926"
    },
    {
        id: 11,
        title: "Saving Private Ryan",
        year: 1998,
        genres: ["War", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/bdD39MpSVhKjxarTxLSfX6baoMP.jpg",
        baseRating: 4.6,
        description: "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven of his men are chosen to find the fourth brother.",
        director: "Steven Spielberg",
        runtime: 169,
        imdbId: "tt0120815"
    },
    {
        id: 12,
        title: "The Green Mile",
        year: 1999,
        genres: ["Drama", "Fantasy", "Crime"],
        poster: "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
        baseRating: 4.5,
        description: "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments.",
        director: "Frank Darabont",
        runtime: 189,
        imdbId: "tt0120689"
    },
    {
        id: 13,
        title: "Se7en",
        year: 1995,
        genres: ["Thriller", "Crime", "Mystery"],
        poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/sKCr78MXSLixwmZ8DyDrqljQ8h.jpg",
        baseRating: 4.5,
        description: "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the 'seven deadly sins'.",
        director: "David Fincher",
        runtime: 127,
        imdbId: "tt0114369"
    },
    {
        id: 14,
        title: "The Prestige",
        year: 2006,
        genres: ["Drama", "Mystery", "Thriller"],
        poster: "https://image.tmdb.org/t/p/w500/bdN3gXuIZYaJP7ftKK2sU0nPtEA.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/dlovsLkqPCMKfqNVvXOvbOHGAN6.jpg",
        baseRating: 4.4,
        description: "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy.",
        director: "Christopher Nolan",
        runtime: 130,
        imdbId: "tt0482571"
    },
    {
        id: 15,
        title: "Gladiator",
        year: 2000,
        genres: ["Action", "Drama", "Adventure"],
        poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/8mIFqVuGWGvMjKyqBmsNGpbj2Vs.jpg",
        baseRating: 4.5,
        description: "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals.",
        director: "Ridley Scott",
        runtime: 155,
        imdbId: "tt0172495"
    },
    {
        id: 16,
        title: "The Departed",
        year: 2006,
        genres: ["Crime", "Drama", "Thriller"],
        poster: "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/8od5Wra8aq1YgA5yau9VLRvLEkL.jpg",
        baseRating: 4.4,
        description: "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, while the gangsters do the same.",
        director: "Martin Scorsese",
        runtime: 151,
        imdbId: "tt0407887"
    },
    {
        id: 17,
        title: "Whiplash",
        year: 2014,
        genres: ["Drama", "Music"],
        poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg",
        baseRating: 4.5,
        description: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
        director: "Damien Chazelle",
        runtime: 107,
        imdbId: "tt2582802"
    },
    {
        id: 18,
        title: "The Shining",
        year: 1980,
        genres: ["Horror", "Thriller"],
        poster: "https://image.tmdb.org/t/p/w500/9fgh3Ns2II9IAZBI2gVtXGK1UdD.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/mmd1HnuvAzFc4iuVJcnBrhDNEKb.jpg",
        baseRating: 4.4,
        description: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter.",
        director: "Stanley Kubrick",
        runtime: 144,
        imdbId: "tt0081505"
    },
    {
        id: 19,
        title: "Eternal Sunshine of the Spotless Mind",
        year: 2004,
        genres: ["Romance", "Drama", "Sci-Fi"],
        poster: "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/7y3iLm4FiXyKJxFzl9HvVFT0jWB.jpg",
        baseRating: 4.4,
        description: "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same.",
        director: "Michel Gondry",
        runtime: 108,
        imdbId: "tt0338013"
    },
    {
        id: 20,
        title: "Spirited Away",
        year: 2001,
        genres: ["Animation", "Fantasy", "Family"],
        poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
        baseRating: 4.6,
        description: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had.",
        director: "Hayao Miyazaki",
        runtime: 125,
        imdbId: "tt0245429"
    },
    {
        id: 21,
        title: "Parasite",
        year: 2019,
        genres: ["Thriller", "Drama", "Comedy"],
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
        baseRating: 4.5,
        description: "All unemployed, Ki-taek's family takes a peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        director: "Bong Joon-ho",
        runtime: 132,
        imdbId: "tt6751668"
    },
    {
        id: 22,
        title: "The Grand Budapest Hotel",
        year: 2014,
        genres: ["Comedy", "Drama", "Adventure"],
        poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/7c5sCaAKkGqguF0XWJY8eHvdwHq.jpg",
        baseRating: 4.3,
        description: "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
        director: "Wes Anderson",
        runtime: 100,
        imdbId: "tt2278388"
    },
    {
        id: 23,
        title: "Inglourious Basterds",
        year: 2009,
        genres: ["War", "Drama", "Thriller"],
        poster: "https://image.tmdb.org/t/p/w500/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/aVzPvCDH6P7j9cOMfJbk7S7S3Xf.jpg",
        baseRating: 4.4,
        description: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans.",
        director: "Quentin Tarantino",
        runtime: 153,
        imdbId: "tt0361748"
    },
    {
        id: 24,
        title: "Django Unchained",
        year: 2012,
        genres: ["Western", "Drama", "Action"],
        poster: "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg",
        baseRating: 4.4,
        description: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        director: "Quentin Tarantino",
        runtime: 165,
        imdbId: "tt1853728"
    },
    {
        id: 25,
        title: "Mad Max: Fury Road",
        year: 2015,
        genres: ["Action", "Sci-Fi", "Adventure"],
        poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
        baseRating: 4.5,
        description: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken.",
        director: "George Miller",
        runtime: 120,
        imdbId: "tt1392190"
    },
    {
        id: 26,
        title: "Fight Club",
        year: 1999,
        genres: ["Drama", "Thriller"],
        poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
        baseRating: 4.5,
        description: "A ticking-Loss insurance employee and soap salesman build a global organization to help vent male aggression.",
        director: "David Fincher",
        runtime: 139,
        imdbId: "tt0137523"
    },
    {
        id: 27,
        title: "Avengers: Endgame",
        year: 2019,
        genres: ["Action", "Sci-Fi", "Adventure"],
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        baseRating: 4.4,
        description: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos.",
        director: "Anthony & Joe Russo",
        runtime: 181,
        imdbId: "tt4154796"
    },
    {
        id: 28,
        title: "Joker",
        year: 2019,
        genres: ["Crime", "Drama", "Thriller"],
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YMDNqKAo.jpg",
        baseRating: 4.3,
        description: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City.",
        director: "Todd Phillips",
        runtime: 122,
        imdbId: "tt7286456"
    },
    {
        id: 29,
        title: "The Lion King",
        year: 1994,
        genres: ["Animation", "Family", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyDrqljQ8h3.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/wXsQvli6tWqja51pYxXNG1LFIGV.jpg",
        baseRating: 4.5,
        description: "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father.",
        director: "Roger Allers & Rob Minkoff",
        runtime: 89,
        imdbId: "tt0110357"
    },
    {
        id: 30,
        title: "Back to the Future",
        year: 1985,
        genres: ["Adventure", "Comedy", "Sci-Fi"],
        poster: "https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/xq6hXfBpAGsEh2sqSSk5SPOsBhj.jpg",
        baseRating: 4.5,
        description: "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting.",
        director: "Robert Zemeckis",
        runtime: 116,
        imdbId: "tt0088763"
    }
        ];
        initializeApp();
    }
}

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', loadMovies);

// User preference profiles with more detailed data
const userProfiles = {
    1: {
        name: "Action Lover",
        avatar: "🦸",
        preferences: ["Action", "Sci-Fi", "Thriller"],
        movieIds: [4, 6, 7, 106, 112, 126, 127], // Injected Dune, Batman, Spiderman, Deadpool!
        watchedCount: 156,
        avgRating: 4.3
    },
    2: {
        name: "Drama Enthusiast",
        avatar: "🎭",
        preferences: ["Drama", "Romance", "Music"],
        movieIds: [1, 5, 12, 107, 131], // Injected Oppenheimer, The Whale
        watchedCount: 203,
        avgRating: 4.5
    },
    3: {
        name: "Comedy Fan",
        avatar: "😄",
        preferences: ["Comedy", "Animation", "Fantasy"],
        movieIds: [20, 29, 109, 130, 133], // Injected Everything Everywhere, Mario, Inside Out 2
        watchedCount: 178,
        avgRating: 4.2
    },
    4: {
        name: "Sci-Fi Geek",
        avatar: "🚀",
        preferences: ["Sci-Fi", "Action", "Mystery"],
        movieIds: [6, 9, 115, 134, 142], // Injected Arrival, Tenet, The Creator
        watchedCount: 234,
        avgRating: 4.4
    },
    5: {
        name: "Romance Admirer",
        avatar: "💕",
        preferences: ["Romance", "Drama", "Fantasy"],
        movieIds: [19, 12, 141, 143, 1], // Injected Asteroid City, Challengers
        watchedCount: 145,
        avgRating: 4.6
    }
};

// Current state
let currentUserId = 1;
let selectedMovie = null;

// Content-Based K-Nearest Neighbors Recommendation Algorithm
function getRecommendations(userId) {
    const profile = userProfiles[userId];
    if (!profile) return [];

    const watchedMovieIds = new Set(profile.movieIds);
    const watchedMovies = movieDatabase.filter(m => watchedMovieIds.has(m.id));

    // Calculate maximum accuracy recommendation score for each un-watched movie
    const scoredMovies = movieDatabase
        .filter(movie => !watchedMovieIds.has(movie.id))
        .map(movie => {
            let totalSimilarity = 0;

            // Compare candidate movie against EVERY movie the user has watched
            watchedMovies.forEach(watched => {
                // 1. Jaccard Similarity for Genres
                const intersection = movie.genres.filter(g => watched.genres.includes(g)).length;
                const union = new Set([...movie.genres, ...watched.genres]).size;
                const genreSim = union === 0 ? 0 : intersection / union;

                // 2. Director Affinity Bonus
                const directorSim = (movie.director && movie.director === watched.director) ? 1.0 : 0;

                // 3. Temporal Exponential Decay (movies released in similar eras are more highly correlated)
                const yearDiff = Math.abs(movie.year - watched.year);
                const temporalSim = Math.exp(-yearDiff / 20);

                // Weighted combination of features for this specific peer comparison
                // Genres are the strongest predictor (70%), Time (20%), Director exact matches (10%)
                const similarityScore = (genreSim * 0.7) + (temporalSim * 0.2) + (directorSim * 0.1);
                totalSimilarity += similarityScore;
            });

            // Average the similarity profile across all watched movies
            const avgSimilarity = totalSimilarity / Math.max(watchedMovies.length, 1);
            
            // Factor in the movie's global baseline rating as a quality bias (0.8 to 1.0 multiplier)
            const ratingBias = 0.8 + (movie.baseRating / 25);
            
            const finalScore = avgSimilarity * ratingBias * 100;
            const purePredictiveMatch = Math.min(99, Math.round(finalScore));

            return {
                ...movie,
                score: finalScore,
                matchScore: purePredictiveMatch,
                predictedRating: ((movie.baseRating * 0.7) + ((finalScore / 100) * 1.5)).toFixed(1)
            };
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, 5) // Get top 5 recommendations
        .map((movie, index) => ({
            ...movie,
            rank: index + 1
        }));

    return scoredMovies;
}

// Generate star rating display
function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const decimal = rating - fullStars;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<span class="star full">★</span>';
    }
    if (decimal >= 0.5) {
        stars += '<span class="star half">★</span>';
    }
    for (let i = Math.ceil(rating); i < 5; i++) {
        stars += '<span class="star empty">☆</span>';
    }
    return stars;
}

// Create movie card HTML
function createMovieCard(movie) {
    return `
        <div class="movie-card" onclick="openMovieModal(${movie.id})" data-movie-id="${movie.id}">
            <div class="movie-rank">#${movie.rank}</div>
            <div class="match-score">${movie.matchScore}% Match</div>
            <div class="movie-poster-container">
                <img src="${movie.poster}" alt="${movie.title}" class="movie-poster-img" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/300x450/667eea/ffffff.png?text=${encodeURIComponent(movie.title).replace(/'/g, '%27')}'">
                <div class="poster-overlay">
                    <div class="overlay-content">
                        <p class="movie-description">${movie.description}</p>
                        <button class="view-details-btn">
                            <span>View Details</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-meta">
                    <span class="movie-year">${movie.year}</span>
                    <span class="movie-runtime">${movie.runtime} min</span>
                </div>
                <div class="movie-genres">
                    ${movie.genres.slice(0, 3).map(genre => `<span class="genre-tag">${genre}</span>`).join('')}
                </div>
                <div class="movie-rating">
                    <div class="rating-stars">${getStarRating(parseFloat(movie.predictedRating))}</div>
                    <span class="rating-value">${movie.predictedRating}</span>
                </div>
                <div class="predicted-badge">
                    <span class="badge-icon">🎯</span>
                    <span class="badge-text">KNN Predicted</span>
                </div>
            </div>
        </div>
    `;
}

// Display recommendations with animation
function displayRecommendations(userId) {
    const container = document.getElementById('recommendations-container');
    const recommendations = getRecommendations(userId);

    // Update user profile display
    updateUserProfile(userId);

    if (recommendations.length === 0) {
        container.innerHTML = '<div class="empty-state">No recommendations available. Please select a user.</div>';
        return;
    }

    // Loading state with animation
    container.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
            <p>Computing K-Nearest Neighbors...</p>
            <div class="loading-progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    `;

    // Simulate processing time
    setTimeout(() => {
        const cardsHTML = recommendations.map(movie => createMovieCard(movie)).join('');
        container.innerHTML = cardsHTML;

        // Animate cards
        const cards = container.querySelectorAll('.movie-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.95)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 120);
        });
    }, 1200);
}

// Update user profile display
function updateUserProfile(userId) {
    const profile = userProfiles[userId];
    const profileContainer = document.getElementById('user-profile-info');
    if (profileContainer && profile) {
        profileContainer.innerHTML = `
            <div class="profile-avatar">${profile.avatar}</div>
            <div class="profile-details">
                <div class="profile-name">${profile.name}</div>
                <div class="profile-stats">
                    <span>${profile.watchedCount} movies watched</span>
                    <span>Avg rating: ${profile.avgRating}</span>
                </div>
                <div class="profile-preferences">
                    ${profile.preferences.map(p => `<span class="pref-tag">${p}</span>`).join('')}
                </div>
            </div>
        `;
    }
}

// Open movie modal
function openMovieModal(movieId) {
    const movie = movieDatabase.find(m => m.id === movieId);
    if (!movie) return;

    selectedMovie = movie;

    const modal = document.getElementById('movie-modal');
    const modalContent = document.getElementById('modal-content');

    const similarMovies = movieDatabase
        .filter(m => m.id !== movieId)
        .map(m => {
            const intersection = m.genres.filter(g => movie.genres.includes(g)).length;
            const union = new Set([...m.genres, ...movie.genres]).size;
            const genreSim = union === 0 ? 0 : (intersection / union);
            
            // Give bonuses to same director and similar release decade
            const directorSim = (m.director && m.director === movie.director) ? 0.5 : 0;
            const temporalSim = Math.exp(-Math.abs(m.year - movie.year) / 20) * 0.2;
            
            return { ...m, simScore: genreSim + directorSim + temporalSim };
        })
        .sort((a, b) => b.simScore - a.simScore)
        .slice(0, 4);

    modalContent.innerHTML = `
        <div class="modal-backdrop" style="background-image: url('${movie.backdrop}')"></div>
        <div class="modal-body">
            <button class="modal-close" onclick="closeMovieModal()">&times;</button>
            <div class="modal-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.onerror=null; this.src='https://placehold.co/300x450/667eea/ffffff.png?text=${encodeURIComponent(movie.title).replace(/'/g, '%27')}'">
            </div>
            <div class="modal-info">
                <h2 class="modal-title">${movie.title}</h2>
                <div class="modal-meta">
                    <span class="meta-year">${movie.year}</span>
                    <span class="meta-runtime">${movie.runtime} min</span>
                    <span class="meta-rating">
                        <span class="star">★</span> ${movie.baseRating}
                    </span>
                </div>
                <div class="modal-genres">
                    ${movie.genres.map(g => `<span class="modal-genre">${g}</span>`).join('')}
                </div>
                <p class="modal-description">${movie.description}</p>
                <div class="modal-director">
                    <strong>Director:</strong> ${movie.director}
                </div>
                <div class="modal-actions">
                    <a href="https://www.imdb.com/title/${movie.imdbId}" target="_blank" class="btn-imdb">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14.31 10L13 8.5 11.69 10 10 8.5V14l1.69-1.5L13 14l1.31-1.5L16 14V8.5L14.31 10z"/>
                            <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z"/>
                        </svg>
                        View on IMDb
                    </a>
                    <button class="btn-watchlist" onclick="addToWatchlist(${movie.id})">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                        </svg>
                        Add to Watchlist
                    </button>
                </div>
                ${similarMovies.length > 0 ? `
                <div class="similar-movies">
                    <h3>Similar Movies</h3>
                    <div class="similar-grid">
                        ${similarMovies.map(m => `
                            <div class="similar-card" onclick="openMovieModal(${m.id})">
                                <img src="${m.poster}" alt="${m.title}">
                                <div class="similar-title">${m.title}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close movie modal
function closeMovieModal() {
    const modal = document.getElementById('movie-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    selectedMovie = null;
}

// Add to watchlist
function addToWatchlist(movieId) {
    const movie = movieDatabase.find(m => m.id === movieId);
    if (movie) {
        showNotification(`"${movie.title}" added to your watchlist!`);
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <span class="notification-icon">✓</span>
        <span class="notification-text">${message}</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Genre filter
function filterByGenre(genre) {
    const container = document.getElementById('all-movies-container');
    if (!container) return;
    let filteredMovies = movieDatabase;
    if (genre !== 'all') {
        filteredMovies = movieDatabase.filter(m => m.genres.includes(genre));
    }

    container.innerHTML = filteredMovies.map((movie, index) => `
        <div class="small-movie-card" onclick="openMovieModal(${movie.id})" style="animation-delay: ${index * 50}ms">
            <img src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/200x300/667eea/ffffff.png?text=${encodeURIComponent(movie.title).replace(/'/g, '%27')}'">
            <div class="small-card-overlay">
                <div class="small-card-title">${movie.title}</div>
                <div class="small-card-year">${movie.year}</div>
            </div>
        </div>
    `).join('');
}

// Initialize the application
function initializeApp() {
    const userSelect = document.getElementById('user-select');
    const getRecommendationsBtn = document.getElementById('get-recommendations');

    if (!userSelect || !getRecommendationsBtn) return;

    // Display initial recommendations for first user
    displayRecommendations(1);

    // Get recommendations on button click
    getRecommendationsBtn.addEventListener('click', () => {
        const userId = parseInt(userSelect.value);
        currentUserId = userId;
        displayRecommendations(userId);

        getRecommendationsBtn.innerHTML = '<span class="btn-spinner"></span> Processing...';
        getRecommendationsBtn.disabled = true;

        setTimeout(() => {
            getRecommendationsBtn.innerHTML = 'Get Recommendations';
            getRecommendationsBtn.disabled = false;
        }, 1200);
    });

    // Load all movies section
    loadAllMovies();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // User selection change
    document.addEventListener('change', (e) => {
        if (e.target.id === 'user-select') {
            const userId = parseInt(e.target.value);
            currentUserId = userId;
            displayRecommendations(userId);
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMovieModal();
        }
    });

    // Close modal on backdrop click
    document.getElementById('movie-modal')?.addEventListener('click', (e) => {
        if (e.target.id === 'movie-modal') {
            closeMovieModal();
        }
    });

    // Genre filter buttons
    document.querySelectorAll('.genre-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.genre-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByGenre(btn.dataset.genre);
        });
    });

    // Pipeline step animations
    const pipelineSteps = document.querySelectorAll('.pipeline-step');
    pipelineSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            step.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            step.style.color = 'white';
            step.style.transform = 'scale(1.15) translateY(-8px)';
            const stepText = step.querySelector('.step-text');
            if (stepText) stepText.style.color = 'white';
        });

        step.addEventListener('mouseleave', () => {
            step.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #e8eaf6 100%)';
            step.style.color = '#333';
            step.style.transform = '';
            const stepText = step.querySelector('.step-text');
            if (stepText) stepText.style.color = '#1a1a2e';
        });
    });

    // Load all movies section
    loadAllMovies();
});

// Load all movies in browse section
function loadAllMovies() {
    const container = document.getElementById('all-movies-container');
    if (!container) return;

    container.innerHTML = movieDatabase.slice(0, 12).map((movie, index) => `
        <div class="small-movie-card" onclick="openMovieModal(${movie.id})" style="animation-delay: ${index * 50}ms">
            <img src="${movie.poster}" alt="${movie.title}" loading="lazy" onerror="this.onerror=null; this.src='https://placehold.co/200x300/667eea/ffffff.png?text=${encodeURIComponent(movie.title).replace(/'/g, '%27')}'">
            <div class="small-card-overlay">
                <div class="small-card-title">${movie.title}</div>
                <div class="small-card-year">${movie.year}</div>
            </div>
        </div>
    `).join('');
}
