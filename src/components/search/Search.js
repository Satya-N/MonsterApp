import React from 'react'
import "./search.css";

const Search = ({ title, handleChange }) => {
    return (
        <>
            <h2 className="title">{title}</h2>
            <input onChange={handleChange} type="text" name="search" id="search" placeholder="Type To Filter" />
        </>

    )
}

export default Search;