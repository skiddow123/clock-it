import React from 'react'
import CheckList from "../checkList/CheckList"
import './ClockIn.css'
import { beforeStartupParts } from "../../EquipmentParts"
import InfoTable from '../infoTable/InfoTable'

const beforeStartupQuestions = beforeStartupParts

export default function ClockIn() {
    return (
        <div className='clockin'>
            <CheckList tiltle="Clock In Form" questions={beforeStartupQuestions} />
            <InfoTable />
        </div>
    )
}
