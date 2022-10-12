import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quize = () => {
    const allQuizData = useLoaderData()
    const allQuiz = allQuizData.data
    const questions = allQuiz.questions
    return (
        <div>
            <h3 className='blog-header'>Quize Of {allQuiz.name}</h3>
            {
                questions.map(question => <Question 
                    key={question.id}
                 SingleTopicQuestion={question}

                ></Question>)
            }
        </div>
    );
};

export default Quize;