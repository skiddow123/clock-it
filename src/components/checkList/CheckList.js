import React from 'react'
import { useState } from 'react'
import { TextField, Button, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel, FormHelperText, Card, Grid, Typography, Snackbar, Alert, Container, Paper, InputLabel, Select, MenuItem, Input } from '@mui/material'
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './CheckList.css'
import axios from "axios"

const constructFormInitialValues = (questions) => {
    let formInitialValues = {}

    formInitialValues["fullName"] = ""
    formInitialValues["loginNumber"] = ""
    formInitialValues["equipmentId"] = ""
    questions.map(questionObject => formInitialValues[questionObject.question] = "")
    formInitialValues["notes"] = ""
    return formInitialValues;
}

const constructFormValidationSchemaYupObject = (questions) => {
    let formValidationSchemaYupObject = {}

    questions.map(questionObject => formValidationSchemaYupObject[questionObject.question] = Yup.string().oneOf(["damaged", "not damaged"], "required").required(`Question ${questionObject.number} must be answered`))
    formValidationSchemaYupObject["fullName"] = Yup.string().required("Full name is required")
    formValidationSchemaYupObject["loginNumber"] = Yup.string().required("Login Number is required")
    formValidationSchemaYupObject["equipmentId"] = Yup.string().required("Equipment Number is required")
    // formValidationSchemaYupObject["notes"] = Yup.string().required("Notes is required");  //TODO: check if notes is required
    return formValidationSchemaYupObject;
}

export default function CheckList({ tiltle, questions }) {
    const [snackBarOpen, setSnackBarOpen] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [snackBarAlertSeverity, setSnackBarAlertSeverity] = useState("info")

    const api = axios.create({
        baseURL: "http://localhost:8900/",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    })

    const formInitialValues = constructFormInitialValues(questions);
    const formValidationSchemaYupObject = constructFormValidationSchemaYupObject(questions);

    const formValidationSchema = Yup.object().shape(formValidationSchemaYupObject)

    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackBarOpen(false)
    }

    const handleFormSubmission = async (values) => {
        let payload = values
        payload["id"] = "alfa"
        console.log(payload);
        let res = await api.post("dataservices/v1/checklist/before", payload)
        console.log(res);
        // fetch("http://localhost:8900/dataservices/v1/checklist/before", {
        //     method: "POST",
        //     // mode: "no-cors",
        //     headers: {dataservices/v1/checklist
        //         "Content-Type": "application/json",
        //         "Accept": "application/json"
        //     },
        //     body: JSON.stringify({"id":"eee","firstName":"bdbdbdbdb","lastName":"dbdbdbd","damageOnMachine":"true","diuCondition":"false","dieselGeneration":"true","eRoomDoors":"false","gantryMotors":"true","antiCollisionSensors":"false","catWhiskers":"true","steeringRod":"false","camera":"true","gantryGearBox":"false","wheelGuards":"true","accessGateSensors":"false","earthingSystem":"true","stairwayOrMonkeyLadder":"false","walkwayLights":"true","tyreOrRimOrHub":"false","ashorePowerCable":"true","cabinGlassStatus":"false","notes":""})
        // })
        // .then(res => {
        //     if(res.ok) {
        //         setSnackBarMessage("Form Submitted Successfully")
        //         setSnackBarAlertSeverity("success")
        //         setSnackBarOpen(true)
        //     }
        //     setSnackBarMessage("Form Submission Failed, Try again later")
        //     setSnackBarAlertSeverity("error")
        //     setSnackBarOpen(true)
        // })
        // console.log(JSON.stringify(values));
        // setSnackBarMessage("Form Submitted Successfully")
        // setSnackBarOpen(true)
    }
    return (
        <div className='form'>
            <Snackbar
                autoHideDuration={4000}
                open={snackBarOpen}
                onClose={handleSnackBarClose}
            >
                <Alert severity={snackBarAlertSeverity} onClose={handleSnackBarClose}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
            <Container component={Paper} style={{ padding: "50px" }} elevation={3}>
                <Typography gutterBottom variant='h6'>{tiltle}</Typography>
                <Formik
                    initialValues={formInitialValues}
                    onSubmit={(values) => handleFormSubmission(values)}
                    validationSchema={formValidationSchema}
                >
                    {
                        ({ dirty, isValid }) =>
                            <Form>
                                <Grid container rowSpacing={3}>
                                    <Grid sm={12} item>
                                        <FormControl size='small' fullWidth>
                                            <Field as={TextField} required name='loginNumber' label='Login Number' helperText={<ErrorMessage name='loginNumber'>{msg => <div style={{ color: "#B04445" }}>{msg}</div>}</ErrorMessage>}></Field>
                                        </FormControl>
                                    </Grid>
                                    <Grid sm={12} item>
                                        <FormControl fullWidth>
                                            <Field as={TextField} required name='fullName' label='Full Name' helperText={<ErrorMessage name='fullName' fullWidth>{msg => <div style={{ color: "#B04445" }}>{msg}</div>}</ErrorMessage>}></Field>
                                        </FormControl>
                                    </Grid>
                                    <Grid sm={12} item>
                                        <FormControl size='small' fullWidth>
                                            <Field as={TextField} required name='equipmentId' label='Equipment ID' helperText={<ErrorMessage name='equipmentId' fullWidth>{msg => <div style={{ color: "#B04445" }}>{msg}</div>}</ErrorMessage>}></Field>
                                        </FormControl>
                                    </Grid>
                                    {/* <Grid sm={12} item>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Shift</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                label="Shift"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="Day">Day</MenuItem>
                                                <MenuItem value="Night">Night</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid> */}
                                    {/* <Grid sm={12} item>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Shift Name</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                label="Shift Name"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="red eagle">Red Eagle</MenuItem>
                                                <MenuItem value="blue falcon">Blue Falcon</MenuItem>
                                                <MenuItem value="blue falcon">White Ox</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid> */}
                                    {/* <Grid sm={12} item>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                // value={age}
                                                label="Status"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="active">Active</MenuItem>
                                                <MenuItem value="inactive">Inactive</MenuItem>
                                                <MenuItem value="pm">PM</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid> */}
                                    {
                                        questions.map(qstn =>
                                            <Grid key={qstn.number} xs={12} item>
                                                <FormControl>
                                                    <FormLabel>
                                                        <Typography variant='subtitle2' style={{ fontWeight: "bold" }} gutterBottom>{`${qstn.number}. ${qstn.label}`}</Typography>
                                                    </FormLabel>
                                                    <Field as={RadioGroup}
                                                        name={qstn.question}
                                                    // style={{ 'display': 'inline' }}
                                                    >
                                                        <FormControlLabel style={{fontWeight: 200}} value={"damaged"} control={<Radio />} label='Damaged' labelPlacement='end' />
                                                        <FormControlLabel value={"not damaged"} control={<Radio />} label="Not Damaged" labelPlacement='end' />
                                                    </Field>
                                                    <FormHelperText error={true}><ErrorMessage name={qstn.question} /></FormHelperText>
                                                </FormControl>
                                            </Grid>
                                        )
                                    }
                                    <Grid xs={12} item>
                                        <Field as={TextField} multiline={true} rows='3' name='notes' label='notes' fullWidth></Field>
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Button type='submit' disabled={ !dirty || !isValid } variant='contained' color='primary' fullWidth>Clock In</Button>
                                    </Grid>
                                </Grid>
                            </Form>
                    }
                </Formik>
            </Container>
        </div>
    )
}
