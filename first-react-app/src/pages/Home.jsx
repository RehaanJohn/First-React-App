import MovieCard from "../components/MovieCard"
import { useState } from "react";
import "../css/Home.css"

function Home() {
    const [searchQeuery, setSearchQuery] = useState("");



    const movies = [
        {id: 1, title: "John Wick", release_date: "2016"},
        {id: 2, title: "Blade", release_date: "2018"},
        {id: 3, title: "Iron Man", release_date: "2020"},
        {id: 4, title: "Superman", release_date: "2022"}
    ];
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQeuery)
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                    value = {searchQeuery}
                    onChange = {(e) => setSearchQuery(e.target.value)}

                />
                <button type="submit" className="search-button">
                    Search

                </button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQeuery) && <MovieCard movie={movie} key={movie.id} />
                ))} 
            </div>
        </div>
    );

    
}

export default Home