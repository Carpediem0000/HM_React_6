import React, { useRef, useEffect } from 'react';

const SearchInput = ({ searchT, onSearchChange }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <input
            ref={inputRef}
            type="text"
            value={searchT}
            onChange={onSearchChange}
            placeholder="Search by name"
        />
    );
};

export default SearchInput;
