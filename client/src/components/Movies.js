import React, { useState } from 'react';
import { useLazyQuery, useQuery } from '@apollo/client';
import { GET_MOVIE_BY_NAME, QUERY_ALL_MOVIES } from './MovieQueries';

function Movies() {
    const [movieName, setMovieName] = useState("");
    const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
    const [fetchMovie, { data: searchedMovie, error: searchedMovieError }] = useLazyQuery(GET_MOVIE_BY_NAME);

    const handleMovieInput = (ev) => {
        setMovieName(ev.target.value);
    }

    return (
        <section>
            <h2>Movies</h2>
            <ul>{movieData && movieData.movies.map((movie) => {
                return <li key={movie.id}>
                    <h2>Name: {movie.name}</h2>
                    <h2>Year: {movie.year}</h2>
                    <h2>Rating: {movie.rating}</h2>
                    <h2>Watched: {movie.watched ? "Watched" : "Not Watched"}</h2>
                </li>
            })}
            </ul>
            <article>
                <h2>Search for Movie</h2>
                <input type="text" placeholder="Movie Name" onChange={handleMovieInput} />
                <button onClick={() =>
                    fetchMovie({
                        variables: {
                            name: movieName
                        }
                    })}>
                    Search
                </button>
                <ul>
                    <h2>Found movie:</h2>
                    {searchedMovie ? <li>
                        <h2>Name: {searchedMovie?.movieByName.name}</h2>
                        <h2>Year: {searchedMovie?.movieByName.year}</h2>
                        <h2>Rating: {searchedMovie?.movieByName.rating}</h2>
                        <h2>Watched: {searchedMovie?.movieByName.watched ? "Watched" : "Not Watched"}</h2>
                    </li>
                        :
                        <h2>No movies found :(</h2>}
                </ul>
            </article>
        </section>
    );
}

export default Movies;
