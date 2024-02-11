import React from 'react'
import Exercice from './Exercice'

const Group = ({ group }) => {
    return (
        <div key={group.groupid}>
            <h3 className='bg-info p-2'>{group.groupname}</h3>
            {
                group.exercices && group.exercices.map(exercice => {
                    return (
                        <div key={exercice.exerciceid}>
                            <Exercice exercice={exercice} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Group