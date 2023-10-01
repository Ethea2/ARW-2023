import React from 'react'
import Question from './components/Question'
import FAQDesign from './components/FAQDesign'

const FAQs = () => {

  const QA = [
    {"question" : "What is annual recruitment week?", 
    "answer" : "IDK bro"},
    {"question" : "How do I join?",
    "answer" : "asdasdasdas asd akjhdas kljhaskdljahsd aaksdhask jdhaskj dhaskjdh akjsdhak jshdkj"},
    {"question" : "How do I join?",
    "answer" : "click on buttons"},
    {"question" : "How do I join?",
    "answer" : "click on buttons"}
  ]

  return (
    <>    <style>
          {/* {`
            html{
              background: url('/questionmark.svg') no-repeat center center fixed;
              background-size: cover;
            }
            
          `} */}
        </style>
    <FAQDesign />
      <div className="flex flex-col items-center justify-center">
          <h1 className="mt-faq-header mb-4 text-7xl font-bit">FAQs</h1>
          <div className = "px-8 w-11/12 join join-vertical md:w-4/6">
            {
              QA.map((q, i) => (
                <Question QA={q} key ={i}/>
                )
              )
            }
          </div>
      </div>
    </>
  )
}

export default FAQs