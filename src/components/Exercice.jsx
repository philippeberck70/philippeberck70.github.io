import React, { useState } from 'react'
import Sentence from '../Sentence'

const Exercice = ({ exercice }) => {
    const [score, setScore] = useState(0);
    return (
        <div key={exercice.exerciceid} className='mb-3'>
            <h4 className='bg-warning p-2'>{exercice.exercicename}</h4>
            {
                exercice.sentences && exercice.sentences.map(sentence => {
                    return (
                        <div key={sentence.sentenceid} className='alert alert-light' role='alert' >
                            <Sentence sentence={sentence} score={score} setScore={setScore} />
                        </div>
                    )
                })
            }
            <h5 className='text-primary'>Score : {score}/{exercice.sentences.length}</h5>
        </div>
    )
}

export default Exercice