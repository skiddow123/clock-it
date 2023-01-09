import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const MUISelectField = ({ label, errorString, children, value, name, onChange, onBlur }) => {
    return (
        <FormControl fullWidth>
            <InputLabel required>{label}</InputLabel>
            <Select label={label} name={name} onChange={onChange} value={value} onBlur={onBlur}>
                {children}
            </Select>
            <FormHelperText>{errorString}</FormHelperText>
        </FormControl>
    )
}


function FormikSelect({ label, name, errorString, menuItems }) {
    return (
        <div>
            <Field
                name={name}
                as={MUISelectField}
                label={label}
                errorString={<ErrorMessage name={name}>{msg => <div style={{ color: "#B04445" }}>{msg}</div>}</ErrorMessage>}
            >
                {
                    menuItems.map(item => <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>)
                }
            </Field>
            {/* <MUISelectField label={label}>
                {
                    menuItems.map(item => <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>)
                }
            </MUISelectField> */}
        </div>
    )
}

export default FormikSelect