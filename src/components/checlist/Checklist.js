import React from 'react'
import Button from 'react-bootstrap/Button'
import { useFormik } from 'formik'

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

    //TODO: extract to a function
    let formInitialValues = {}
    beforeStartupQuestions.map( questionObject => formInitialValues[questionObject.question] = "");
    formInitialValues["notes"] = "";
    const formik = useFormik({
        initialValues: formInitialValues,
          //TODO: change onSubmit to post data to backend
        onSubmit: (values) => {
            console.log(values);
        }
    })

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            {
                beforeStartupQuestions.map( qstn => 
                    <div key={qstn.number}>
                        <h5>{qstn.number}. {qstn.question}</h5>
                        <input 
                            type='radio' 
                            id={`damaged${qstn.number}`} 
                            name={qstn.question}
                            value='damaged'
                            onChange={formik.handleChange}
                        />
                        <label htmlFor={`damaged${qstn.number}`}>
                            Damaged
                        </label>
                        <input 
                            type='radio' 
                            id={`not-damaged${qstn.number}`} 
                            name={qstn.question}
                            value='not-damaged'
                            onChange={formik.handleChange}
                        />
                        <label htmlFor={`not-damaged${qstn.number}`}>
                            Not Damaged
                        </label>
                    </div>
                )
            }
            <div>
            <label htmlFor='notes'>Notes</label>
                <textarea 
                    cols='10' 
                    name='notes' 
                    id='notes' 
                    onChange={formik.handleChange}
                >
                </textarea>
            </div>
            <Button type="submit">Submit</Button>
        </form>
        <h1>{}</h1>
    </div>
  )
}
