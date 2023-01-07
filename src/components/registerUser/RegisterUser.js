import { Grid, Paper, TextField, Typography, Button, Snackbar, Alert } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import React, { useState } from 'react'
import "./RegisterUser.css"
import { Stack } from '@mui/system'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useAuthContext } from '../../context/AuthContext1'

const formInitialValues = {
    email: "",
    password: "",
    confirmPassword: ""
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().min(6, "Password can't be less than 6 charactors").required("Password is required"),
    confirmPassword: Yup.string().min(6, "Password can't be less than 6 charactors").required("Password is required")
        .oneOf([Yup.ref("password")], "passwords must match")
})

export default function RegisterUser() {
    const [snackBarOpen, setSnackBarOpen] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [snackBarAlertSeverity, setSnackBarAlertSeverity] = useState("info")
    const [loading, setLoading] = useState(false)
    const { registerUser, currentUser } = useAuthContext()


    const handleRegisterUserFormSubmit = async (values) => {
        try {
            setLoading(true)
            await registerUser(values.email, values.password)
            console.log(currentUser)
              setSnackBarMessage("Registration Successful")
              setSnackBarAlertSeverity("success")
              setSnackBarOpen(true)
        } catch {
              setSnackBarMessage("Registration Failed")
              setSnackBarAlertSeverity("error")
              setSnackBarOpen(true)
        }


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
                <PersonAddIcon color='primary' fontSize='large' />
                <Typography variant='h6'>Register User</Typography>
                <Formik
                    onSubmit={(values) => { handleRegisterUserFormSubmit(values) }}
                    validationSchema={validationSchema}
                    initialValues={formInitialValues}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Stack spacing={1}>
                                <Field as={TextField} label="Email *" name='email' fullWidth />{errors.email && touched.email ? (<div className='error'>{errors.email}</div>) : null}
                                <Field as={TextField} type='password' label="Password *" name='password' fullWidth />{errors.password && touched.password ? (<div className='error'>{errors.password}</div>) : null}
                                <Field as={TextField} type='password' label="Confirm Password *" name='confirmPassword' fullWidth />{errors.confirmPassword && touched.confirmPassword ? (<div className='error'>{errors.confirmPassword}</div>) : null}
                                <Button type='submit' disabled={loading} variant='contained' fullWidth>Login</Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

