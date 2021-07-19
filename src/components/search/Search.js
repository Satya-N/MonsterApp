import React, { useState, useEffect } from 'react'
import "./search.css";
import axios from 'axios';
import Cardlist from '../cardlist/Cardlist';
import Loader from "react-loader-spinner";

const Search = ({ title }) => {
    
    let [users, setUsers] = React.useState([]);
    let [searchField, setSearchField] = React.useState("");
    let [loading, setLoading] = React.useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setLoading(false);
                setUsers(res.data)
            }).catch(err => {
                setLoading(false);
                console.log(err);
            })
    }, [])
    
    const handleChange = (e) => {
        setSearchField(e.target.value);
        console.log(searchField);
    }
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()))
    
    return (
        <>
            <h2 className="title">{title}</h2>
            <input onChange={handleChange} type="text" name="search" id="search" placeholder="Type To Filter" />
            {loading ? <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            /> : <Cardlist users={filteredUsers} />}
        </>

    )
}

export default Search;