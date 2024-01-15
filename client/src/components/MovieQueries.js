import { gql } from "@apollo/client";

export const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            id
            name
            year
            watched
            rating
        }
    }
`;

export const GET_MOVIE_BY_NAME = gql`
    query GetMovieByName($name: String!) {
        movieByName(name: $name) {
            id
            name
            year
            watched
            rating
        }
    }
`;
