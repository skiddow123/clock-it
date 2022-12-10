import React from 'react'
import CheckList from "../checkList/CheckList";

const afterStartupQuestions = [
    {
        "number": 1,
        "question": "are you sane1"
    },
    {
        "number": 2,
        "question": "are you sane2"
    },
    {
        "number": 3,
        "question": "are you sane3"
    },
    {
        "number": 4,
        "question": "are you sane4"
    },
    {
        "number": 5,
        "question": "are you sane5"
    }
]
export default function ClockOut() {
    return (
        <div>
            <CheckList questions={afterStartupQuestions}/>
        </div>
    )
}