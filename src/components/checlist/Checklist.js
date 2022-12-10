import React from 'react'
import { TextField, Button, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel, FormHelperText } from '@mui/material'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

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

const constructFormInitialValues = (questions) => {
    let formInitialValues = {}

    formInitialValues["firstname"] = ""
    formInitialValues["lastname"] = ""
    questions.map(questionObject => formInitialValues[questionObject.question] = "")
    formInitialValues["notes"] = ""
    return formInitialValues;
}

const constructFormValidationSchema = (questions) => {
    let formValidationSchemaYupObject = {}

    questions.map(questionObject => formValidationSchemaYupObject[questionObject.question] = Yup.string().oneOf(["damaged", "not-damaged"], "required").required(`Question ${questionObject.number} must be answered`))
    formValidationSchemaYupObject["firstname"] = Yup.string().required("firstname is required")
    formValidationSchemaYupObject["lastname"] = Yup.string().required("lastname is required");
    formValidationSchemaYupObject["notes"] = Yup.string().required("Notes is required");  //TODO: check if notes is required
    return formValidationSchemaYupObject;
}

export default function Checklist() {

    //TODO: extract to a function
    let formInitialValues = constructFormInitialValues(beforeStartupQuestions);


    //TODO: extract to a function
    let formValidationSchemaYupObject = constructFormValidationSchema(beforeStartupQuestions);
    console.log(formValidationSchemaYupObject);


    const formValidationSchema = Yup.object().shape(formValidationSchemaYupObject)

    return (
        <div>
            <Formik initialValues={formInitialValues} onSubmit={(values, props) => {
                console.log(values);
            }} 
            validationSchema={formValidationSchema}
            >
                {
                    ({ props }) =>
                        <Form>

                            {
                                beforeStartupQuestions.map(qstn =>
                                    <div key={qstn.number}>
                                        <FormControl>
                                            <FormLabel id="demo-radio-buttons-group-label">{`${qstn.number}. ${qstn.question}`}</FormLabel>
                                            <Field as={RadioGroup}
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                name={qstn.question}
                                                style={{ 'display': 'initial' }}
                                            >
                                                <FormControlLabel value="damaged" control={<Radio />} label='Damaged' />
                                                <FormControlLabel value="not-damaged" control={<Radio />} label="Not Damaged" />
                                            </Field>
                                        </FormControl>
                                        <FormHelperText><ErrorMessage name={qstn.question}/></FormHelperText>
                                    </div>
                                )
                            }
                            <div>
                                <Field as={TextField} multiline={true} rows='3' name='notes' label='notes' helperText={<ErrorMessage name='notes'/>}></Field>
                            </div>
                            <div>
                                <Field as={TextField} name='firstname' label='Firstname' helperText={<ErrorMessage name='firstname'/>}></Field>
                            </div>
                            <div>
                                <Field as={TextField} name='lastname' label='Lastname' helperText={<ErrorMessage name='lastname'/>}></Field>
                            </div>
                            <div>
                                <Button type='submit' variant='contained' color='primary'>Clock In</Button>
                            </div>
                        </Form>
                }
            </Formik>

        </div>
    )
}
