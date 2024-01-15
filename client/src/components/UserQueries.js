import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            age
            planet
            friends {
                name
                age
            }
        }
    }
`;

export const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CraeateUserInput!) {
        createUser(input: $input) {
            id
            name
            age
            planet
        }
    }
`;
