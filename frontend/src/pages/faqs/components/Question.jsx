import React, { useState } from 'react'
import Answer from './Answer'

const Question = ({QA}) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClicked = () => {
    setIsClicked(!isClicked);
    console.log('i have been clicked')
  };

  return (
    <div className="collapse collapse-plus join-item">
        <input type="checkbox" /* uncomment for radio : name = "test" */ onClick={toggleClicked} />
        <div className= {`bg-${isClicked ? 'primary' : 'neutral'} collapse-title text-md font-medium rounded-none`} >
            {QA.question}
        </div>
        <div className="collapse-content bg-white rounded-none"> 
            <Answer answer = {QA.answer}/>
        </div>
    </div>
  );
}

export default Question;
