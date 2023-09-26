import React from 'react'

const CrownSelector = ({ elites, handleSelect }) => {


  return (
    <div className='flex gap-10'>
      {
        elites?.map((elite) => (
          <div className="avatar border-2 rounded-md border-primary" onClick={(e) => handleSelect(e, elite)}>
            <div className="w-44 rounded">
              <img src={elite.image} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CrownSelector