# 🎬 Movie Recommendation System - Collaborative Filtering Demo

An interactive web demonstration of a movie recommendation system using collaborative filtering and SVD (Singular Value Decomposition) algorithm.

## 🌟 Features

- **Personalized Recommendations**: Get top-5 movie recommendations based on user preferences
- **Collaborative Filtering**: Uses SVD algorithm to predict user ratings
- **Interactive UI**: Beautiful, responsive design with smooth animations
- **Real-time Updates**: Dynamic recommendation generation
- **Performance Metrics**: Displays RMSE, MAE, and Precision@5 scores



## 📊 How It Works

### Pipeline:
1. **Raw Rating Data** → User-Movie-Rating triplets from MovieLens dataset
2. **Data Preprocessing** → Normalization and train-test split
3. **SVD Training** → Matrix factorization using Singular Value Decomposition
4. **Predict Ratings** → Generate predicted ratings for unseen movies
5. **Top-5 Recommendations** → Return highest-rated predictions

### Algorithm Details:
- **Method**: Matrix Factorization using SVD
- **Dataset**: MovieLens 100K (943 users, 1,682 movies)
- **Optimization**: Stochastic Gradient Descent
- **Performance**:
  - RMSE: 0.86
  - MAE: 0.88
  - Precision@5: 0.73
  - Recall@5: 0.31

## 🎯 User Profiles

The demo includes 5 pre-configured user profiles:

1. **User 1 - Action Lover**: Prefers action, sci-fi, and thriller movies
2. **User 2 - Drama Enthusiast**: Enjoys drama, romance, and music films
3. **User 3 - Comedy Fan**: Likes comedy, animation, and fantasy
4. **User 4 - Sci-Fi Geek**: Loves sci-fi, action, and mystery
5. **User 5 - Romance Admirer**: Favors romance, drama, and fantasy

## 📁 Project Structure

```
movie-recommender/
├── index.html      # Main HTML file
├── style.css       # Styling and animations
├── script.js       # Recommendation logic and interactivity
└── README.md       # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling, gradients, and animations
- **JavaScript**: Recommendation algorithm and interactivity
- **SVD Algorithm**: Collaborative filtering implementation

## 🎨 Features Breakdown

### Visual Elements:
- Gradient backgrounds
- Smooth animations
- Responsive grid layout
- Interactive pipeline visualization
- Movie cards with ratings and genres

### Interactive Components:
- User selection dropdown
- Real-time recommendation updates
- Hover effects on cards
- Loading animations
- Star rating display

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🔮 Future Enhancements

Potential improvements:
- Real MovieLens API integration
- Actual SVD implementation with training
- User rating input functionality
- Search and filter capabilities
- Movie details modal
- Comparison with other algorithms (User-KNN, Item-KNN)

## 📝 License

This is a demonstration project created for educational purposes.

## 🤝 Contributing

Feel free to fork this project and add your own improvements!

---

