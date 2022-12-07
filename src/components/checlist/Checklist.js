import React from 'react'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const beforeStartupQuestions = [
    {
        "number": 1,
        "question": "are you mad1"
    },
    {
        "number": 2,
        "question": "are you mad2"
    },
    {
        "number": 3,
        "question": "are you mad3"
    },
    {
        "number": 4,
        "question": "are you mad4"
    },
    {
        "number": 5,
        "question": "are you mad5"
    }
]

const afterStartupQuestions = [
    {
        "number": 1,
        "question": "are you sane"
    },
    {
        "number": 2,
        "question": "are you sane"
    },
    {
        "number": 3,
        "question": "are you sane"
    },
    {
        "number": 4,
        "question": "are you sane"
    },
    {
        "number": 5,
        "question": "are you sane"
    }
]

export default function Checklist() {
    let formInitialValues = {}
    beforeStartupQuestions.map( questionObject => formInitialValues[questionObject.question] = "")

  return (
    <div>
        <form>
            {
                beforeStartupQuestions.map(quesstion =>             
                <div key={quesstion.number}>
                    {/* <div> */}
                    <h5>{quesstion.number}. {quesstion.question}</h5>
                    <input type='radio' id={`damaged${quesstion.number}`} name={quesstion.question} value='damaged'/> <label htmlFor={`damaged${quesstion.number}`}> Damaged</label>
                    <input type='radio' id={`not-damaged${quesstion.number}`} name={quesstion.question} value='not damaged'/> <label htmlFor={`not-damaged${quesstion.number}`}>Not damaged</label>
                    {/* </div> */}
                </div>)
            }
            <div>
                <label htmlFor='notes'>Notes</label>
                <textarea cols='10' name='notes' id='notes'></textarea>
            </div>
        </form>
    </div>
  )
}
