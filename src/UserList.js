import React from 'react';

const UserList = ({ users }) => {
    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    {user.name} - {user.age} - {user.email}
                </li>
            ))}
        </ul>
    );
};

export default UserList;
