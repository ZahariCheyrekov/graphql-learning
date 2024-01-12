const { gql } = require("apollo-server");

const typeDefs = gql`
    type User {
        id: ID!
        name: Name!
        username: String!
        age: Int!
        planet: Planet!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie {
        id:ID!
        name:String!
        year:Int!
        watched: Boolean!
        rating: Float!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
        movies: [Movie!]!
        movieByName(name: String!): Movie!
    }

    enum Planet {
        EARTH
        MUSTAFAR
        TATOOINE
        KEPLER_10B
        KEPLER_78B
        COROT_7B
        KEPLER_16B
        KEPLER_453B
        MAKEMAKE
        CERES
    }

    enum Name {
        FIRST
        SECOND
        THIRD
        FOURTH
        FIFTH
        SIXTH
        SEVENTH
        EIGHT
        NINTH
        TENTH
   }
`;

module.exports = {
    typeDefs: typeDefs
};
