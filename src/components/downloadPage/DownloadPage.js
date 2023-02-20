import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { shiftItems } from '../../EquipmentParts'
import FormikDatePicker from '../FormikDatePicker/FormikDatePicker'
import FormikSelect from '../FormikSelect/FormikSelect' 
import { Snackbar, Alert } from '@mui/material'
import * as Yup from 'yup'
import axios from 'axios'
import fileDownload from 'js-file-download'

const BACKEND_API_URL = process.env.REACT_APP_BACKEND_URL; // must watch

const api = axios.create({
    baseURL: BACKEND_API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
})

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
    
    const handleFormSubmission = async (values, resetForm) => {
        try {
            const response = await api.get(`dataservices/v1/checklist/xlsx/${values.date}/${values.shift}`, {responseType: "blob"})
            const fileName = `${values.date}-${values.shift}.xlsx`
            fileDownload(response.data, fileName)
            setSnackBarMessage("File Downloaded")
            setSnackBarAlertSeverity("success")
            setSnackBarOpen(true)
            resetForm()

        } catch (error) {
            if (error.response.status === 400) {
                setSnackBarMessage("Report for shift and date not found")
                setSnackBarAlertSeverity("error")
                setSnackBarOpen(true)
                resetForm()
            }
            if (error.response.status === 500) {
                setSnackBarMessage("Something Wrong Happend.. Try again later")
                setSnackBarAlertSeverity("error")
                setSnackBarOpen(true)
                resetForm()
            }
        }
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
                    onSubmit={(values, {resetForm}) => handleFormSubmission(values, resetForm)}
                    validationSchema={formValidationSchema}
                >
                    {
                        ({dirty, isValid, isSubmitting}) =>
                            <Form>
                                <Grid container spacing={3}>
                                    <Grid item sm={6}>
                                        <FormikSelect name="shift" label="Shift" options={shiftItems} fullWidth />
                                    </Grid>
                                    <Grid item sm={6}>
                                        <FormikDatePicker name='date' label='Shift Date' />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Button type='submit' disabled={!dirty || !isValid || isSubmitting} variant='contained' color='primary' fullWidth>Download File</Button>
                                    </Grid>
                                </Grid>
                            </Form>
                    }
                </Formik>
            </Container>
        </div>
    )
}
