import React, { useState } from 'react'
import DependentComponent from './DependentComponent.js';
import Loggedin from './LoggedIn.js';

const Forms = () => {
    let [ username, setUsername ] = useState('Guest'); // const username = ''
    let [ password, setPassword ] = useState(''); // const password = ''
    const [ error, setError ] = useState(null);
    console.log(useState(0));

    const handleSubmit = (event) => {
        console.log(username);
        event.preventDefault();
    }

    const handleChange = (event) => {
        const {value} = event.target;
        const isValid = value === value.toLowerCase();
        setError(isValid ? null : 'There is A Uppercase Letter')
    }

    const handlePassword = (event) => {
        const {value} = event.target;
        setPassword( value === 'fuck' ? '' : value.toLowerCase() )

    }

    return (
        <>
            <p style={{ color: 'red',fontSize: '3rem' }}>{error}</p>
            <p>Your username is {username}</p>
            <form onSubmit={handleSubmit}>
                {/* uncontrolled component */}
                <input onChange={handleChange} type="text" name="username" id="username" /><br />
                {/* controlled component */}
                <input onChange={handlePassword} value={password} type="text" name="password" id="password" /><br />
                <button type="submit">click</button>
            </form>
            {/* conditional rendering */}
            { username === 'silu' ? <Loggedin username={username} /> : <DependentComponent username={username} /> }
        </>
    )
        
}

export default Forms;