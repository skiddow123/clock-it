import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'

export default function FormikDatePicker({name, ...otherProps}) {
    const [field, meta] = useField(name)
    const configDataPicker = {
        ...field,
        ...otherProps,
        type: "date",
        fullWidth: true,
        variant: "outlined",
        InputLabelProps: {
            shrink: true
        }
    }

    if(meta && meta.touched && meta.error) {
        configDataPicker.error = true
        configDataPicker.helperText = meta.error
    }

  return (
    <TextField {...configDataPicker}/>
  )
}

