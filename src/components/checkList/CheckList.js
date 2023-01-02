import React from 'react'
import { useState } from 'react'
import { TextField, Button, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel, FormHelperText, Card, Grid, Typography, Snackbar, Alert } from '@mui/material'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './CheckList.css'

const constructFormInitialValues = (questions) => {
    let formInitialValues = {}

    formInitialValues["firstName"] = ""
    formInitialValues["lastName"] = ""
    questions.map(questionObject => formInitialValues[questionObject.question] = "")
    formInitialValues["notes"] = ""
    return formInitialValues;
}

const constructFormValidationSchemaYupObject = (questions) => {
    let formValidationSchemaYupObject = {}

    questions.map(questionObject => formValidationSchemaYupObject[questionObject.question] = Yup.boolean().oneOf([true, false], "required").required(`Question ${questionObject.number} must be answered`))
    formValidationSchemaYupObject["firstName"] = Yup.string().required("firstname is required")
    formValidationSchemaYupObject["lastName"] = Yup.string().required("lastname is required");
    // formValidationSchemaYupObject["notes"] = Yup.string().required("Notes is required");  //TODO: check if notes is required
    return formValidationSchemaYupObject;
}

export default function CheckList({ tiltle, questions }) {
    const [snackBarOpen, setSnackBarOpen] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState("")

    const formInitialValues = constructFormInitialValues(questions);
    const formValidationSchemaYupObject = constructFormValidationSchemaYupObject(questions);

    const formValidationSchema = Yup.object().shape(formValidationSchemaYupObject)

    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackBarOpen(false)
    }

    return (
        <div className='form'>
            <Snackbar
                autoHideDuration={4000}
                open={snackBarOpen}
                onClose={handleSnackBarClose}
            >
                <Alert severity='success' onClose={handleSnackBarClose}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
            <Card style={{ padding: "50px" }} elevation={3}>
                <Typography gutterBottom variant='h6'>{tiltle}</Typography>
                <Formik initialValues={formInitialValues} onSubmit={(values, props) => {
                    console.log(JSON.stringify(values));
                    setSnackBarMessage("Form Submitted Successfully")
                    setSnackBarOpen(true)
                }}
                    validationSchema={formValidationSchema}
                >
                    {
                        ({ props }) =>
                            <Form>
                                <Grid container spacing={1}>
                                    <Grid xs={12} sm={6} item>
                                        <Field as={TextField} name='firstName' label='First Name' helperText={<ErrorMessage name='firstName' variant="standard">{msg => <div style={{ color: "#B04445" }}>{msg}</div>}</ErrorMessage>}></Field>
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <Field as={TextField} name='lastName' label='Last Name' helperText={<ErrorMessage name='lastName' variant="standard">{msg => <div style={{ color: "#B04445" }}>{msg}</div>}</ErrorMessage>}></Field>
                                    </Grid>
                                    {
                                        questions.map(qstn =>
                                            <Grid key={qstn.number} xs={12} item>
                                                <FormControl>
                                                    <FormLabel id="demo-radio-buttons-group-label">{`${qstn.number}. ${qstn.label}`}</FormLabel>
                                                    <Field as={RadioGroup}
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        name={qstn.question}
                                                        style={{ 'display': 'initial' }}
                                                    >
                                                        <FormControlLabel value={true} control={<Radio />} label='Damaged' />
                                                        <FormControlLabel value={false} control={<Radio />} label="Not Damaged" />
                                                    </Field>
                                                </FormControl>
                                                <FormHelperText error={true}><ErrorMessage name={qstn.question} /></FormHelperText>
                                            </Grid>
                                        )
                                    }
                                    <Grid xs={12} item>
                                        <Field as={TextField} multiline={true} rows='3' name='notes' label='notes' fullWidth></Field>
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Button type='submit' variant='contained' color='primary' fullWidth>Clock In</Button>
                                    </Grid>
                                </Grid>
                            </Form>
                    }
                </Formik>
            </Card>
        </div>
    )
}
