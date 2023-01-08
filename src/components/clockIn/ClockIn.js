import React from 'react'
import CheckList from "../checkList/CheckList"
import './ClockIn.css'
import { beforeStartupParts } from "../../EquipmentParts"
import InfoTable from '../infoTable/InfoTable'
import { Grid } from '@mui/material'

const beforeStartupQuestions = beforeStartupParts

export default function ClockIn() {
    return (
        // <div className='clockin'>
        //     <CheckList tiltle="Clock In Form" questions={beforeStartupQuestions} />
        //     <InfoTable />
        // </div>
        <Grid container spacing={2}>
            <Grid item sm={6}>
                <CheckList tiltle="Clock In Form" questions={beforeStartupQuestions} />
            </Grid>
            <Grid item sm={6}>
                <InfoTable />
            </Grid>
        </Grid>
    )
}
