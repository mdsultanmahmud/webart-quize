import React from 'react';
import './Question.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const Question = ({ SingleTopicQuestion }) => {
    const { correctAnswer, id, options, question } = SingleTopicQuestion
    const regexForStripHTML = /(<([^>]+)>)/gi
    const stripQuestion = question.replaceAll(regexForStripHTML, '')
    let correctMsg
    function checkAns(clickedOption) {
        if (correctAnswer === clickedOption) {
            correctMsg = 'Your answer is correct!!'
        } else {
            correctMsg = 'Your answer is wrong!!'
        }
    }
    const notify = () => toast(correctMsg);
    return (
        <div className='single-question'>
            
            <div className='qsn'>
                <h5>{stripQuestion}</h5>
                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </div>
            <div className='option'>
                {
                    options.map(option => <DisplayOption
                        option={option}
                        id={id}
                        checkAns={checkAns}
                        notify={notify}
                    ></DisplayOption>)
                }
            </div>

        </div>
    );
};

function DisplayOption({ option, id, checkAns, notify }) {
    return (
        <div className='single-option'>
            <button className='ans' onClick={notify}>
                <p onClick={() => checkAns(option)} style={{ margin: '0' }}>{option}</p>
            </button>
            <ToastContainer />
        </div>
    )
}

export default Question;