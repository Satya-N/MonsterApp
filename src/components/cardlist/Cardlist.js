import React from 'react';
import "./cardlist.css";
import Card from "../cards/Card";

const Cardlist = ({ users }) => {
    
    <div className="card-list">
        {
            users.map(user => <Card user={ user } />)
            
        }


    </div>
}

export default Cardlist;