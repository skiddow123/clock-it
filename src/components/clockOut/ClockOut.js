import React from 'react'
import CheckList from "../checkList/CheckList"
import './ClockOut.css'
import { afterStartupParts } from "../../EquipmentParts"

const afterStartupQuestions = afterStartupParts

export default function ClockOut() {
    return (
        <div className='clockout'>
            <CheckList questions={afterStartupQuestions}/>
        </div>
    )
}