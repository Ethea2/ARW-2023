import React from 'react'
import Answer from './Answer'

const Question = ({QA}) => {
  return (
    <div className="collapse collapse-plus">
        <input type="checkbox" /> 
        <div className="collapse-title text-md font-medium bg-primary">
            {QA.question}
        </div>
        <div className="collapse-content bg-white"> 
            <Answer answer = {QA.answer}/>
        </div>
    </div>
  );
}

export default Question;
