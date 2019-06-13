import React from 'react'
import { Link } from 'react-router-dom';


function MovieDetails({ movie }) {
    const { title, director, metascore, stars, id } = movie;
    return (
        
        <Link to={`/movie/${id}`}>
          <MovieCard />
        </Link>
    );
}
export default MovieDetails;
