import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'


export default function FormikTextField({name, ...otherProps}) {
  const [field, meta] = useField(name)
  const configTextField = {
    ...field,
    fullWidth: true,
    variant: "outlined",
    ...otherProps,
  }

  if (meta && meta.touched && meta.error) {
    configTextField.error = true
    configTextField.helperText = meta.error
  }

  return (
    <TextField {...configTextField} />
  )
}
