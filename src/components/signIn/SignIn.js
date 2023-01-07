import { Grid, Paper, TextField, Typography, Button, Snackbar, Alert } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import React, { useState } from 'react'
import "./SignIn.css"
import { Stack } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'

const formInitialValues = {
    email: "",
    password: ""
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().min(6, "Password can't be less than 6 charactors").required("Password is required")
})

export default function SignIn() {
    const [snackBarOpen, setSnackBarOpen] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [snackBarAlertSeverity, setSnackBarAlertSeverity] = useState("info")

    const handleSignFormSubmit = async (values) => {
        console.log(values);
        setSnackBarMessage("Login Successful")
        setSnackBarAlertSeverity("success")
        setSnackBarOpen(true)
    }

    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setSnackBarOpen(false)
    }

    return (
        <Grid align="center">
            <Snackbar
                autoHideDuration={4000}
                open={snackBarOpen}
                onClose={handleSnackBarClose}
            >
                <Alert severity={snackBarAlertSeverity} onClose={handleSnackBarClose}>
                    {snackBarMessage}
                </Alert>
            </Snackbar>
            <Paper className='paper' elevation={6} >
                <LoginIcon color='primary' fontSize='large' />
                <Typography variant='h6'>Sign In</Typography>
                <Formik
                    onSubmit={(values) => handleSignFormSubmit(values)}
                    validationSchema={validationSchema}
                    initialValues={formInitialValues}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Stack spacing={1}>
                                <Field as={TextField} label="Email *" name='email' fullWidth />{errors.email && touched.email ? (<div className='error'>{errors.email}</div>) : null}
                                <Field as={TextField} type='password' label="Password *" name='password' fullWidth />{errors.password && touched.password ? (<div className='error'>{errors.password}</div>) : null}
                                <Button type='submit' variant='contained' fullWidth>Login</Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

