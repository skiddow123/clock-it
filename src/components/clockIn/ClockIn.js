import React from 'react'
import CheckList from "../checkList/CheckList";

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

export default function ClockIn() {
    return (
        <div>
            <CheckList questions={beforeStartupQuestions}/>
        </div>
    )
}
