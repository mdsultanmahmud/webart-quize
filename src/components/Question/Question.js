import React from 'react';
import './Question.css'
const Question = ({ SingleTopicQuestion }) => {
    const { correctAnswer, id, options, question } = SingleTopicQuestion
    const regexForStripHTML = /(<([^>]+)>)/gi
    const stripQuestion = question.replaceAll(regexForStripHTML, '')
    function checkAns(clickedOption){
       console.log(correctAnswer === clickedOption)
    }

    return (
        <div className='single-question'>
            <div>
                <h5>{stripQuestion}</h5>
                <div className='option'>
                    {
                        options.map(option => <DisplayOption
                            option={option}
                            id = {id}
                            checkAns = {checkAns}
                        ></DisplayOption>)
                    }
                </div>
            </div>
        </div>
    );
};

function DisplayOption({ option,id,checkAns }) {
    return (
        <div className='single-option'>
            <input  id={id} type="radio" />
            <label for={id}>
            <p onClick={() =>checkAns(option)}  className='ans'>{option}</p>
            </label>
            
        </div>
    )
}

export default Question;