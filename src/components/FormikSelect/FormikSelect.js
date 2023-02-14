// import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import { TextField, MenuItem } from '@mui/material'
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { useField, useFormikContext } from 'formik'

// import React from 'react'

export default function ({name, options, ...otherProps}) {
    const { setFieldValue } = useFormikContext()
    const [field, meta] = useField(name)
    const handleOnChange = event => {
        const { value } = event.target
        setFieldValue(name, value)
    }

    const configSelect = {
        fullWidth: true,
        variant: "outlined",
        select: true,
        onChange: handleOnChange,
        ...field,
        ...otherProps
    }

    if (meta && meta.touched && meta.error) {
        configSelect.error = true
        configSelect.helperText = meta.error
    }

  return (
    <TextField {...configSelect}>
        {options.map(item => <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>)}
    </TextField>
  )
}
