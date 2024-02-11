import React from 'react'
import Records from '../records.json'
import Group from './Group';

const Exercices = () => {
  return (
    <div className='container mt-3'>
      {
        Records && Records.map(group => {
          return (
            <div key={group.groupid}>
              <Group group={group} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Exercices