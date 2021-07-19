import React from 'react'
import "./card.css";

const Card = ({ user }) => (
    <div className="card">
        <img loading="lazy" src={`https://robohash.org/${user.name}?set=set2&amp;size=180x180`} alt="" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
    </div>
)
    


export default Card;