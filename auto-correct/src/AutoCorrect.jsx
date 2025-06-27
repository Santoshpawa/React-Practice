import React from 'react'

const AutoCorrect = ({text, correctionObj})=>{
    let count = 0;
    const words = text.split(' ');
    const correctedWords = words.map((word)=>{
        if(correctionObj[word]){
            ++count;
            return correctionObj[word];
        }
        return word;
    })
    const correctedText = correctedWords.join(' ')
    return (
        <div>
            <h4>Corrected Text Preview: </h4>
            <p>{correctedText}</p>
            <h6>Number of Corrected Words : {count}</h6>
        </div>
    )
}

export default AutoCorrect