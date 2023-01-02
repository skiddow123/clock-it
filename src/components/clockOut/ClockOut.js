import React from 'react'
import CheckList from "../checkList/CheckList"
import './ClockOut.css'
import { afterStartupParts } from "../../EquipmentParts"
import InfoTable from '../infoTable/InfoTable'

const afterStartupQuestions = afterStartupParts

export default function ClockOut() {
    return (
        <div className='clockout'>
            <CheckList tiltle='Clock Out Form' questions={afterStartupQuestions}/>
            <InfoTable />
        </div>
    )
}