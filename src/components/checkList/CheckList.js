import React from 'react'
import { useState } from 'react'
import { TextField, Button, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel, FormHelperText, Card, Grid, Typography, Snackbar, Alert, Container, Paper, InputLabel, Select, MenuItem, Input, IconButton } from '@mui/material'
import { Form, Field, Formik, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import './CheckList.css'
import axios from "axios"
import FormikSelect from '../FormikSelect/FormikSelect'
import { shiftNameItems, statusItems, shiftItems } from '../../EquipmentParts'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormikTextField from '../FormikTextField/FormikTextField'


const constructFormInitialValues = (beforeQuestions, afterQuestions) => {
    let formInitialValues = {}

    formInitialValues["fullName"] = ""
    formInitialValues["loginNumber"] = ""
    formInitialValues["equipmentId"] = ""
    formInitialValues["shift"] = ""
    formInitialValues["shiftName"] = ""
    formInitialValues["status"] = ""
    formInitialValues["before"] = {}
    beforeQuestions.map(questionObject => formInitialValues.before[questionObject.question] = "")
    formInitialValues["after"] = {}
    afterQuestions.map(questionObject => formInitialValues.after[questionObject.question] = "")

    formInitialValues["faults"] = [{ fault: "", description: "" }]
    // formInitialValues["notes"] = ""

    console.log(formInitialValues);
    return formInitialValues;
}

const constructFormValidationSchemaYupObject = (beforeQuestions, afterQuestions) => {
    let formValidationSchemaYupObject = {}
    let beforeShape = {}
    let afterShape = {}


    beforeQuestions.map(questionObject => beforeShape[questionObject.question] = Yup.string().oneOf(["damaged", "not damaged"], "required").required(`Question ${questionObject.number} must be answered`))
    afterQuestions.map(questionObject => afterShape[questionObject.question] = Yup.string().oneOf(["damaged", "not damaged"], "required").required(`Question ${questionObject.number} must be answered`))

    // beforeQuestions.map(questionObject => formValidationSchemaYupObject[questionObject.question] = Yup.string().oneOf(["damaged", "not damaged"], "required").required(`Question ${questionObject.number} must be answered`))
    formValidationSchemaYupObject["fullName"] = Yup.string().required("Full name is required")
    formValidationSchemaYupObject["loginNumber"] = Yup.string().required("Login Number is required")
    formValidationSchemaYupObject["equipmentId"] = Yup.string().required("Equipment Number is required")
    formValidationSchemaYupObject["shift"] = Yup.string().required("Shift is required")
    formValidationSchemaYupObject["shiftName"] = Yup.string().required("Shift Name is required")
    formValidationSchemaYupObject["status"] = Yup.string().required("Status Name is required")
    formValidationSchemaYupObject["faults"] = Yup.array().of(Yup.object({
        fault: Yup.string().required("required"),
        description: Yup.string().required("required")
    }))
    formValidationSchemaYupObject["before"] = Yup.object().shape(beforeShape)
    formValidationSchemaYupObject["after"] = Yup.object().shape(afterShape)
    // formValidationSchemaYupObject["notes"] = Yup.string().required("Notes is required");  //TODO: check if notes is required

    return formValidationSchemaYupObject;
}

export default function CheckList({ tiltle, beforeQuestions, afterQuestions }) {
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

    const formInitialValues = constructFormInitialValues(beforeQuestions, afterQuestions);


    const formValidationSchemaYupObject = constructFormValidationSchemaYupObject(beforeQuestions, afterQuestions)
    const formValidationSchema = Yup.object().shape(formValidationSchemaYupObject)

    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackBarOpen(false)
    }

    const handleFormSubmission = async (values) => {
        let payload = values
        // payload["id"] = "alfa"
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
                        ({ values, dirty, isValid, isSubmitting, handleReset }) =>
                            <Form>
                                <Grid container spacing={3}>
                                    <Grid sm={6} item>
                                        <FormikTextField name='loginNumber' label='Login Number' />
                                    </Grid>
                                    <Grid sm={6} item>
                                        <FormikTextField name='fullName' label='Full Name' />
                                    </Grid>
                                    <Grid sm={6} item>
                                        <FormikTextField name='equipmentId' label='Equipment ID' />
                                    </Grid>
                                    <Grid item sm={6}>
                                        <FormikSelect name='shift' label="Shift" options={shiftItems}/>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <FormikSelect name="shiftName" label="Shift Name" errorString="required" options={shiftNameItems} />
                                    </Grid>
                                    <Grid item sm={6}>
                                        <FormikSelect name="status" label="Status" errorString="required" options={statusItems} />
                                    </Grid>
                                    <Grid sm={12} item><Typography>Before Checklist</Typography></Grid>
                                    {
                                        beforeQuestions.map(qstn =>
                                            <Grid key={qstn.number} sm={12} item>
                                                <FormControl sx={{display: "flex" ,justifyContent: "space-spa", flexDirection: ""}}>
                                                    <FormLabel>
                                                        <Typography variant='subtitle2' style={{ fontWeight: "bold", fontSize: 20 }} gutterBottom>{`${qstn.number}. ${qstn.label}`}</Typography>
                                                    </FormLabel>
                                                    <Field as={RadioGroup}
                                                        name={`before.${qstn.question}`}
                                                        style={{ 'display': 'inline' }}
                                                    >
                                                        <FormControlLabel value={"damaged"} control={<Radio />} label='Damaged' />
                                                        <FormControlLabel value={"not damaged"} control={<Radio />} label="Not Damaged" />
                                                    </Field>
                                                    <FormHelperText error={true}><ErrorMessage name={qstn.question} /></FormHelperText>
                                                </FormControl>
                                            </Grid>
                                        )
                                    }
                                    <Grid sm={12} item><Typography>After Checklist</Typography></Grid>
                                    {
                                        afterQuestions.map(qstn =>
                                            <Grid key={qstn.number} sm={12} item alignContent={'center'}>
                                                <FormControl>
                                                    <FormLabel>
                                                        <Typography variant='subtitle2' style={{ fontWeight: "bold", fontSize: 20 }} gutterBottom>{`${qstn.number}. ${qstn.label}`}</Typography>
                                                    </FormLabel>
                                                    <Field as={RadioGroup}
                                                        name={`after.${qstn.question}`}
                                                        style={{ 'display': 'inline' }}
                                                    >
                                                        <FormControlLabel sx={{ fontSize: 100 }} value={"damaged"} control={<Radio />} label='Damaged' />
                                                        <FormControlLabel sx={{ fontWeight: 100 }} value={"not damaged"} control={<Radio />} label="Not Damaged" />
                                                    </Field>
                                                    <FormHelperText error={true}><ErrorMessage name={qstn.question} /></FormHelperText>
                                                </FormControl>
                                            </Grid>
                                        )
                                    }
                                    <Grid item sm={12}>
                                        <Typography variant='h6'>Faults</Typography>
                                    </Grid>
                                    <Grid item sm={12}>
                                        <FieldArray name='faults'>
                                            {
                                                ({ push, remove }) => (
                                                    <div>
                                                        {
                                                            values.faults.map((fault, index) => (
                                                                <Grid key={index} container rowGap={3} spacing={3}>
                                                                    <Grid sm={5} style={{ marginBottom: "5px" }} item>
                                                                        <FormikTextField name={`faults.${index}.fault`} label="Fault" />
                                                                    </Grid>
                                                                    <Grid sm={5} style={{ marginBottom: "5px" }} item>
                                                                        <FormikTextField name={`faults.${index}.description`} label="Fault Description" />
                                                                    </Grid>
                                                                    <Grid sm={2} style={{ marginBottom: "5px" }} item>
                                                                        <IconButton onClick={() => remove(index)} color="error"><RemoveCircleIcon /></IconButton>
                                                                    </Grid>
                                                                </Grid>
                                                            ))
                                                        }
                                                        <Grid item>
                                                            <Button
                                                                variant='outlined'
                                                                startIcon={<AddCircleIcon />}
                                                                style={{ margin: "5px" }}
                                                                onClick={() => {
                                                                    push({
                                                                        fault: "",
                                                                        description: ""
                                                                    })
                                                                }}
                                                            >
                                                                Add Fault
                                                            </Button>
                                                        </Grid>
                                                    </div>
                                                )
                                            }
                                        </FieldArray>
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Button type='submit' disabled={!dirty || !isValid || isSubmitting} variant='contained' color='primary' fullWidth>Clock In</Button>
                                    </Grid>
                                </Grid>
                            </Form>
                    }
                </Formik>
            </Container>
        </div>
    )
}
