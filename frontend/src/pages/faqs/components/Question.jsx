import React, { useState } from 'react'
import Answer from './Answer'

const Question = ({QA}) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClicked = () => {
    setIsClicked(!isClicked);
    console.log('i have been clicked')
    console.log(isClicked)
  };

  return (
    <div className="collapse collapse-plus join-item">
        <input type="checkbox" /* uncomment for radio : name = "test" */ onClick={toggleClicked} />
        <div className= {`collapse-title text-md font-medium rounded-none bg-${isClicked ? 'primary' : 'neutral'}`} >
        {/* <div className= "collapse-title text-md font-medium rounded-none bg-neutral" > */}
            {QA.question}
        </div>
        <div className="collapse-content bg-white rounded-none"> 
            <Answer answer = {QA.answer}/>
        </div>
    </div>
  );
}

export default Question;
