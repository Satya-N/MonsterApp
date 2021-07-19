import React from 'react';
import "./cardlist.css";
import Card from "../cards/Card";

const Cardlist = ({ users }) => {
    return(
        <div className="card-list">
            {
                users.map(user => <Card  key={user.id} user={ user } />)
                
            }
        </div>
    )
    
}

export default Cardlist;