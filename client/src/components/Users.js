import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_USER_MUTATION, QUERY_ALL_USERS } from './UserQueries';

function Users() {
    const [formData, setFormData] = useState({ name: '', age: '', planet: '' });
    const { data: usersData, refetch, loading, error } = useQuery(QUERY_ALL_USERS);

    const [createUser] = useMutation(CREATE_USER_MUTATION);

    const handleChange = (ev) => {
        setFormData({ ...formData, [ev.target.name]: ev.target.value.toUpperCase().trim() });
    }

    const handleCreateUser = (ev) => {
        ev.preventDefault();

        formData.age = Number(formData.age);
        createUser({ variables: { input: formData } });

        refetch();
    }

    return (
        <section>
            <h2>Users</h2>
            {usersData && usersData.users.map((user) => {
                return <article key={user.id}>
                    <h2>Name: {user.name}</h2>
                    <h2>Age: {user.age}</h2>
                    <h2>Planet: {user.planet}</h2>
                </article>
            })}
            <form>
                <input name="name" type="text" placeholder="Name" onChange={handleChange} />
                <input name="age" type="number" placeholder="Age" onChange={handleChange} />
                <input name="planet" type="planet" placeholder="Planet" onChange={handleChange} />
                <button onClick={handleCreateUser}>Create User</button>
            </form>
        </section>
    );
}

export default Users;
