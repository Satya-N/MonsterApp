import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Cardlist from './cardlist/Cardlist';
import Search from './search/Search';
import Loader from "react-loader-spinner";

const App = () => {
    
    let [users, setUsers] = useState([]);
    let [searchField, setSearchField] = useState("");
    let [loading, setLoading] = useState(false);
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
            <Search title="Monster App" handleChange={handleChange}  />
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

export default App;