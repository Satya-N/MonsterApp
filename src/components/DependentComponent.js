import React from 'react'

const DependentComponent = ({ username }) => {
    
    return (
        <div style = {{ width: '50%', height: '50%', color: '#fff', backgroundColor: '#2c3e50' }}>
            <h2>Username From Our Parent is <span style={{ color: 'red' }}>{username}</span> </h2>
        </div>
    )
}

export default DependentComponent;