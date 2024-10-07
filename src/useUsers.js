import { useState, useEffect } from 'react';

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = () => {
            setTimeout(() => {
                setUsers([
                    { name: 'John Doe', age: 30, email: 'john@example.com' },
                    { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
                    { name: 'Bob Johnson', age: 40, email: 'bob@example.com' },
                ]);
                setLoading(false);
            }, 3000);
        };
        fetchUsers();
    }, []);

    return { users, loading };
};

export default useUsers;
