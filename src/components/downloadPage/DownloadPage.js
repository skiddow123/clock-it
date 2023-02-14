import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { shiftItems } from '../../EquipmentParts'
import FormikDatePicker from '../FormikDatePicker/FormikDatePicker'
import FormikSelect from '../FormikSelect/FormikSelect' 
import { Snackbar, Alert } from '@mui/material'
import * as Yup from 'yup'

export const DownloadPage = () => {
    const [snackBarOpen, setSnackBarOpen] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [snackBarAlertSeverity, setSnackBarAlertSeverity] = useState("info")

    const formInitialValues = {
        shift: "",
        date: ""
    }

    const formValidationSchema = Yup.object().shape({
        shift: Yup.string().required("Shift is required"),
        date: Yup.date().required("Shift Date is required")
    })

    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackBarOpen(false)
    }
    
    const handleFormSubmission = async (values) => {
        // let payload = values
        // payload["id"] = "alfa"
        console.log(values);
        setSnackBarMessage("Form Submitted Successfully")
        setSnackBarOpen(true)
        // let res = await api.post("dataservices/v1/checklist/before", payload)

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
                <Typography gutterBottom variant='h6'>Download Excel File</Typography>
                <Formik
                    initialValues={formInitialValues}
                onSubmit={(values) => handleFormSubmission(values)}
                validationSchema={formValidationSchema}
                >
                    {
                        ({ values, dirty, isValid, isSubmitting, handleReset }) =>
                            <Form>
                                <Grid container spacing={3}>
                                    <Grid item sm={6}>
                                        <FormikSelect name="shift" label="Shift" errorString="required" menuItems={shiftItems} />
                                    </Grid>
                                    <Grid item sm={6}>
                                        <FormikDatePicker name='date' label='Shift Date' />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Button type='submit' disabled={!dirty || !isValid || isSubmitting} variant='contained' color='primary' fullWidth>Download</Button>
                                    </Grid>
                                </Grid>
                            </Form>
                    }
                </Formik>
            </Container>
        </div>
    )
}
