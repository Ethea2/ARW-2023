import React from 'react'
import Question from './components/Question'

const FAQs = () => {

  const QA = [{"question" : "What is annual recruitment week?", "answer" : "IDK bro"}]

  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="mt-faq-header mb-4 text-7xl font-bit">FAQs</h1>
        <div className = "px-8">
          {
            QA.map((q, i) => (
              <Question QA={q} key ={i}/>
              )
            )
          }
        </div>
    </div>
  )
}

export default FAQs