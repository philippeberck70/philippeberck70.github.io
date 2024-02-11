import React, { useState } from 'react'

const Sentence = ({ sentence, score, setScore }) => {
    const sentenceblank = sentence.sentencename.replace('_', '___');
    const sentenceParts = sentence.sentencename.split('_');
    const sentencegood = sentenceParts[0] + '<strong>' + sentence.good + '</strong>' + sentenceParts[1];
    const [options, setOptions] = useState(shuffleArray([sentence.good, sentence.bad]));
    const [disabled, setDisabled] = useState(false);
    const [displayblank, setDisplayblank] = useState('block');
    const [displaygood, setDisplaygood] = useState('none');

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function handleClickOption(e, good, option) {
        //console.log(good, option);
        if (option === good) {
            console.log("ok");
            e.target.className = "btn btn-success";
            setScore(score + 1);
        } else {
            e.target.className = "btn btn-danger";
        }
        setDisabled(true);
        setDisplayblank('none');
        setDisplaygood('block');
    }

    return (
        <div>
            <h5>#{sentence.sentenceid}</h5>
            <p style={{ display: displayblank }}>{sentenceblank}</p>
            <p style={{ display: displaygood }}>{sentenceParts[0]}<span className='text-success fw-bold text-decoration-underline'>{sentence.good}</span>{sentenceParts[1]}</p>
            <div className="btn-group" role="group">
                {
                    options && options.map((option, index) => (
                        <button key={index}
                            disabled={disabled}
                            onClick={(e) => handleClickOption(e, sentence.good, option)}
                            type='button'
                            className='btn btn-secondary'>
                            {option}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Sentence