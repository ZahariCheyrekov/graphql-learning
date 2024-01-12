const lodash = require("lodash");
const { Users } = require("../data/users");
const { Movies } = require("../data/movies");

const resolvers = {
    Query: {
        // User Resolvers
        user(_, args) {
            const id = args.id;
            const user = lodash.find(Users, { id: Number(id) });
            return user;
        },
        users() {
            return Users;
        },

        // Movie Resolvers
        movieByName(_, args) {
            const movieName = args.name;
            const movie = lodash.find(Movies, { name: movieName });
            return movie;
        },
        movies() {
            return Movies;
        }
    },
    User: {
        favoriteMovies() {
            return lodash.filter(Movies, (movie) => movie.year >= 2008 && movie.year <= 2018);
        }
    }
};

module.exports = {
    resolvers: resolvers
};
