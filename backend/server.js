const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import movies database
const movies = require('./movies.json');

// Routes
app.get('/api/movies', (req, res) => {
    res.json(movies);
});

app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(m => m.id === parseInt(req.params.id));
    if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
});

app.get('/api/movies/search', (req, res) => {
    const query = req.query.q?.toLowerCase() || '';
    const results = movies.filter(m =>
        m.title.toLowerCase().includes(query) ||
        m.genres.some(g => g.toLowerCase().includes(query))
    );
    res.json(results);
});

app.get('/api/stats', (req, res) => {
    res.json({
        totalMovies: movies.length,
        genres: [...new Set(movies.flatMap(m => m.genres))],
        yearsRange: {
            min: Math.min(...movies.map(m => m.year)),
            max: Math.max(...movies.map(m => m.year))
        }
    });
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`🎬 Movie Recommender Backend running on http://localhost:${PORT}`);
    console.log(`📊 Loaded ${movies.length} movies`);
});
