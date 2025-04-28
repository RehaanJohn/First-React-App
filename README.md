# React Movie App

A sleek, modern web application for discovering and saving your favorite movies. This React-based movie browser features a responsive design, real-time movie search, favorites management, and a beautiful animated UI.

## Features

- **Movie Discovery**: Browse popular movies from TMDB
- **Search Functionality**: Find movies by title
- **Favorites System**: Save and manage your favorite movies
- **Persistent Storage**: Favorites are saved in local storage
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dynamic Video Background**: Creates an immersive experience
- **Modern UI**: Animated elements and gradient styling

## Tech Stack

- **React**: Frontend UI library
- **React Router**: For navigation between pages
- **Context API**: For state management
- **Local Storage**: For persisting user favorites
- **CSS3**: Custom styling with animations
- **TMDB API**: For movie data

## Project Structure

```
src/
├── assets/
│   └── videos/         # Background video assets
├── components/
│   ├── MovieCard.jsx   # Individual movie display component
│   ├── NavBar.jsx      # Navigation component
│   └── VideoBackground.jsx  # Video background component
├── contexts/
│   └── MovieContext.jsx  # Favorites management context
├── css/
│   ├── App.css
│   ├── Favorites.css
│   ├── Home.css
│   ├── MovieCard.css
│   ├── Navbar.css
│   ├── VideoBackground.css
│   └── index.css
├── pages/
│   ├── Favorites.jsx   # Favorites page
│   └── Home.jsx        # Home/search page
├── services/
│   └── api.js          # API service for TMDB
├── App.jsx             # Main application component
└── main.jsx           # Entry point
```

## Setup and Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/react-movie-app.git
   cd react-movie-app
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key
   ```
   VITE_TMDB_API_KEY=your_tmdb_api_key
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. Open your browser to `http://localhost:5173`

## API Configuration

The app uses The Movie Database (TMDB) API. You need to:

1. Register at [themoviedb.org](https://www.themoviedb.org/signup)
2. Request an API key from your account settings
3. Replace the API key in `src/services/api.js` or use environment variables

## Key Components

### MovieContext

Central state management for favorites:
- Stores favorite movies in localStorage
- Provides methods for adding/removing favorites
- Checks if a movie is marked as favorite

### MovieCard

Displays individual movies with:
- Movie poster image
- Title and release year
- Favorite toggle button with animation

### Home Page

Features:
- Search input for finding movies
- Displays search results or popular movies
- Responsive grid layout

### Favorites Page

Shows all saved favorite movies with:
- Ability to remove movies from favorites
- Empty state when no favorites exist

## Future Enhancements

- User authentication
- Movie rating system
- Movie details page
- Genre filtering
- Recommendations based on favorites
- Dark/light theme toggle

## License

MIT

## Credits

- Movie data provided by [The Movie Database (TMDB)](https://www.themoviedb.org)
- Background video from [source] (replace with actual source)
