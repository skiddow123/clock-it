import { Grid, Paper, TextField, Typography, Button, FormControl } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import React from 'react'
import "./SignIn.css"
import { Stack } from '@mui/system';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'

const formInitialValues = {
    email: "",
    password: ""
}

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().min(6, "Password can't be less than 6 charactors").required("Password is required")
})

const handleSignFormSubmit = async (values) => {
    console.log(values);
}

export default function SignIn() {

    return (
        <Grid align="center">
            <Paper className='paper' elevation={6} >
                <LoginIcon color='primary' fontSize='large' />
                <Typography variant='h6'>Sign In</Typography>
                <Formik
                    onSubmit={(values) => handleSignFormSubmit(values)}
                    validationSchema={validationSchema}
                    initialValues={formInitialValues}
                >
                    {({errors, touched}) => (
                        <Form>
                            <Stack spacing={1}>
                                <Field as={TextField} label="Email *" name='email' fullWidth/>{errors.email && touched.email ? (<div className='error'>{errors.email}</div>) : null}
                                <Field as={TextField} label="Password *" name='password' fullWidth/>{errors.password && touched.password ? (<div className='error'>{errors.password}</div>) : null}
                                <Button type='submit' variant='contained' fullWidth>Login</Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>

            </Paper>
        </Grid>
    )
}

