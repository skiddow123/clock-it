import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import React from 'react'
import "./RegisterUser.css"
import { Stack } from '@mui/system'
import { Formik } from 'formik'
import * as Yup from 'yup'

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

const handleRegisterUserFormSubmit = async (values) => {
    console.log(values)
} 

export default function RegisterUser() {
    return (
        <Grid align="center">
            <Paper className='paper' elevation={6} >
                <PersonAddIcon color='primary' fontSize='large'/>
                <Typography variant='h6'>Register A User</Typography>
                <form>
                    <Stack spacing={1}>
                        <TextField label="Email" name='email' fullWidth />
                        <TextField label="Password" name='password' fullWidt/>
                        <TextField label="Confirm Password" name='confirmPassword' fullWidth/>
                        <Button type='submit' variant='contained' fullWidth>Register</Button>
                    </Stack>
                </form>
            </Paper>
        </Grid>
    )
}

