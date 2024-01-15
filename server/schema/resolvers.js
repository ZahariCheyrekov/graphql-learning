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
            if (Users) {
                return { users: Users };
            }

            return { message: "Users list does not exist" };
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
    },
    Mutation: {
        createUser(_, args) {
            const user = args.input;
            const lastId = Users[Users.length - 1].id;
            user.id = lastId + 1;
            Users.push(user);
            return user;
        },
        updateUserName(_, args) {
            const { id, newName } = args.input;
            let updatedUser;

            Users.forEach((user) => {
                if (user.id === Number(id)) {
                    user.name = newName;
                    updatedUser = user;
                }
            });

            return updatedUser;
        },
        deleteUser(_, args) {
            const { id } = args.id;
            lodash.remove(Users, (user) => user.id === Number(id));
            return null;
        }
    },
    UsersResult: {
        __resolveType(obj) {
            if (obj.users) {
                return "Success";
            }

            if (obj.message) {
                return "Error";
            }

            return null;
        }
    }
};

module.exports = {
    resolvers: resolvers
};
