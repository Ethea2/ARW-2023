import React from 'react'

const VSContainer = ({ team1, team2 }) => {
    return (
        <div className='border-2 border-blue-500'>{team1.org} VS {team2.org}</div>
    )
}

export default VSContainer