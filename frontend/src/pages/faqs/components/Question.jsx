import React from 'react'
import Answer from './Answer'

const Question = ({QA}) => {
  return (
    <div className="collapse collapse-plus join-item">
        <input type="checkbox" /* uncomment for radio : name = "test" */ /> 
        <div className="collapse-title text-md font-medium bg-primary">
            {QA.question}
        </div>
        <div className="collapse-content bg-white rounded-none"> 
            <Answer answer = {QA.answer}/>
        </div>
    </div>
  );
}

export default Question;
