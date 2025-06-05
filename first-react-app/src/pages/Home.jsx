import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to load popular movies
    const loadPopularMovies = async () => {
        try {
            setLoading(true);
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        } catch (err) {
            console.error(err);
            setError("Failed to load popular movies.");
        } finally {
            setLoading(false);
        }
    };

    // Function to load searched movies
    const loadSearchedMovies = async (query) => {
        try {
            setLoading(true);
            const searchedMovies = await searchMovies(query);
            setMovies(searchedMovies);
        } catch (err) {
            console.error(err);
            setError("Failed to search movies.");
        } finally {
            setLoading(false);
        }
    };

    // useEffect to load popular movies on mount
    useEffect(() => {
        loadPopularMovies();
    }, []);

    // useEffect to trigger search when searchQuery changes
    useEffect(() => {
        if (searchQuery.trim() === "") {
            // If search is empty, show popular movies
            loadPopularMovies();
        } else {
            // Otherwise, search
            loadSearchedMovies(searchQuery);
        }
    }, [searchQuery]);

    

    return (
        <div className="home">
            <form onSubmit={(e) => e.preventDefault()} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {/* Optional: Add a clear button */}
                {searchQuery && (
                    <button
                        type="button"
                        className="clear-button"
                        onClick={() => setSearchQuery("")}
                    >
                        Clear
                    </button>
                )}
            </form>

            {loading && <p>Loading movies...</p>}
            {error && <p className="error">{error}</p>}

            <div className="movies-grid">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))
                ) : (
                    !loading && <p>No movies found.</p>
                )}
            </div>
        </div>
    );
}

export default Home;
