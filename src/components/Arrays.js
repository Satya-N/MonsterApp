import React, { useState } from 'react'
import axios from 'axios';
import Loader from "react-loader-spinner";

const Arrays = () => {
  let [ users, setUsers ] = React.useState(null);
  let [ error, setError ] = React.useState(null);
  let [ loading, setLoading ] = React.useState(false);
  const run = () => {
    setLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setLoading(false);
      setUsers(res.data)
    }).catch(err => {
      setLoading(false);
      setError(err);
    })
  }

  return (
    <>
      <p style={{ color:'red' }}>{error}</p>
      { loading ? <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
         //3 secs
      /> : '' }
        { users ? users.map( user => <p key={user.id}>{user.name}</p> ) : '' }
      <button onClick={run}>Click</button>
    </>
  )
  
}

export default Arrays;