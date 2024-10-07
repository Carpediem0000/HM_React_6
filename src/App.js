import React, { useState, useMemo, useCallback } from 'react';
import useUsers from './useUsers';
import SearchInput from './SearchInput';
import UserList from './UserList';
import './App.css';

const App = () => {
    const [searchT, setSearchT] = useState('');
    const { users, loading } = useUsers();

    const handleSearchChange = useCallback((event) => {
        setSearchT(event.target.value);
    }, []);

    const filteredUsers = useMemo(() => {
        return users.filter(user =>
            user.name.toLowerCase().includes(searchT.toLowerCase())
        );
    }, [users, searchT]);

    return (
        <div>
            <h1>Search Users</h1>
            <SearchInput searchT={searchT} onSearchChange={handleSearchChange} />

            {loading ? (
                <p>Loading users...</p>
            ) : (
                <UserList users={filteredUsers} />
            )}
        </div>
    );
}

export default App;
