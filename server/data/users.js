const Users = [
    {
        id: 1,
        name: "FIRST",
        age: 100,
        planet: "EARTH",
        friends: [
            {
                id: 2,
                name: "SECOND",
                age: 101,
                planet: "MUSTAFAR"
            },
            {
                id: 3,
                name: "THIRD",
                age: 102,
                planet: "TATOOINE"
            }
        ]
    },
    {
        id: 2,
        name: "SECOND",
        age: 101,
        planet: "MUSTAFAR"
    },
    {
        id: 3,
        name: "THIRD",
        age: 102,
        planet: "TATOOINE",
        friends: [
            {
                id: 1,
                name: "FIRST",
                age: 100,
                planet: "EARTH",
            }
        ]
    },
    {
        id: 4,
        name: "FOURTH",
        age: 103,
        planet: "KEPLER_10B",
        friends: [
            {
                id: 5,
                name: "FIFTH",
                age: 104,
                planet: "KEPLER_78B"
            },
            {
                id: 6,
                name: "SIXTH",
                age: 105,
                planet: "COROT_7B"
            },
            {
                id: 7,
                name: "SEVENTH",
                age: 106,
                planet: "KEPLER_16B"
            },
            {
                id: 8,
                name: "EIGHT",
                age: 107,
                planet: "KEPLER_453B"
            },
            {
                id: 9,
                name: "NINTH",
                age: 108,
                planet: "MAKEMAKE"
            },
            {
                id: 10,
                name: "TENTH",
                age: 109,
                planet: "CERES"
            }
        ]
    },
    {
        id: 5,
        name: "FIFTH",
        age: 104,
        planet: "KEPLER_78B"
    },
    {
        id: 6,
        name: "SIXTH",
        age: 105,
        planet: "COROT_7B"
    },
    {
        id: 7,
        name: "SEVENTH",
        age: 106,
        planet: "KEPLER_16B",
        friends: [
            {
                id: 9,
                name: "NINTH",
                age: 108,
                planet: "MAKEMAKE"
            },
            {
                id: 10,
                name: "TENTH",
                age: 109,
                planet: "CERES"
            }
        ]
    },
    {
        id: 8,
        name: "EIGHT",
        age: 107,
        planet: "KEPLER_453B"
    },
    {
        id: 9,
        name: "NINTH",
        age: 108,
        planet: "MAKEMAKE"
    },
    {
        id: 10,
        name: "TENTH",
        age: 109,
        planet: "CERES",
        friends: [
            {
                id: 8,
                name: "EIGHT",
                age: 107,
                planet: "KEPLER_453B"
            },
        ]
    }
];

module.exports = {
    Users: Users
};
