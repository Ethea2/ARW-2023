import React from 'react'
import VSContainer from './VSContainer'

const GameContainer = ({ game }) => {
  return (
    <div className='border-2 border-primary'>
        {game.game}
        {game.teams.map((vs) => (
          <VSContainer team1 = {vs[0]} team2 = {vs[1]} />
        ))}
        

    </div>
  )
}

export default GameContainer