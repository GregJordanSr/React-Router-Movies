import React from 'react'
import { Link } from 'react-router-dom';


function MovieDetails({ movie }) {
    const { title, director, metascore, stars, id } = movie;
    return (
    
        // created the <Link to=""></Link> to allow the user to see the details of each movie.
        
        <Link to={`/movie/${id}`}>
        <div className="movie-card">
            <h2>{title}</h2>
            <div className="movie-director">
            Director: <em>{director}</em>
            </div>
            <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
            </div>
            <h3>Actors</h3>
    
            {stars.map(star => (
            <div key={star} className="movie-star">
                {star}
            </div>
            ))}
        </div>
        </Link>
    );
}
export default MovieDetails;
