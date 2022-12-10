import React from 'react'
import CheckList from "../checkList/CheckList"
import './ClockIn.css'
import { beforeStartupParts } from "../../EquipmentParts"

const beforeStartupQuestions = beforeStartupParts

export default function ClockIn() {
    return (
        <div className='clockin'>
            <CheckList questions={beforeStartupQuestions}/>
        </div>
    )
}
