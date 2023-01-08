import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Container, Typography, Button, TableContainer } from '@mui/material'
import './InfoTable.css'
import { borderLeft, color } from '@mui/system'

export default function InfoTable() {
const tableHeaderStyle ={
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#002984"
}

const toBeUsedStyle = {
    // fontWeight: "bold",
    fontSize: "0.75rem",
    color: "black",
    backgroundColor: "#dbeddb",
    borderRadius: 8,
    padding: "3px 10px", 
    display: "inline-block"
}

const notToBeUsedStyle = {
    // fontWeight: "bold",
    fontSize: "0.75rem",
    color: "black",
    backgroundColor: "#ffe2dd",
    borderRadius: 8,
    padding: "3px 10px", 
    display: "inline-block"
}

    return (
        <div className='infotable'>
            <TableContainer component={Paper} elevation={3}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={tableHeaderStyle}>eRTG/RTG EQUIPMENT FAULTS</TableCell>
                            <TableCell style={tableHeaderStyle}>USAGE STATUS</TableCell>
                            <TableCell style={tableHeaderStyle}>ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Faulty Camera</TableCell>
                            <TableCell><Typography style={toBeUsedStyle}>To be used</Typography></TableCell>
                            <TableCell>Report for replacement</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>PA System or Horn or Intercom not working</TableCell>
                            <TableCell><Typography style={toBeUsedStyle}>To be used</Typography></TableCell>
                            <TableCell>Report for replacement</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Seat can't adjust</TableCell>
                            <TableCell><Typography style={toBeUsedStyle}>To be used</Typography></TableCell>
                            <TableCell>Report for repair</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>GPS not working</TableCell>
                            <TableCell><Typography style={toBeUsedStyle}>To be used</Typography></TableCell>
                            <TableCell>Report for repair</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Broken wiper</TableCell>
                            <TableCell><Typography style={toBeUsedStyle}>To be used</Typography></TableCell>
                            <TableCell>Report for replacement</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Joystick Cover off</TableCell>
                            <TableCell><Typography style={toBeUsedStyle}>To be used</Typography></TableCell>
                            <TableCell>Report for repair</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Spreader Indicator Lights not working</TableCell>
                            <TableCell><Typography style={notToBeUsedStyle}>Not to be used</Typography></TableCell>
                            <TableCell>Report for repair</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Very Poor Visibilit</TableCell>
                            <TableCell><Typography style={notToBeUsedStyle}>Not to be used</Typography></TableCell>
                            <TableCell>Report for cleaning</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>DGPS not working</TableCell>
                            <TableCell><Typography style={toBeUsedStyle}>To be used</Typography></TableCell>
                            <TableCell>Report for repair</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Wheel Projector not present or damaged</TableCell>
                            <TableCell><Typography style={toBeUsedStyle}>To be used</Typography></TableCell>
                            <TableCell>Report for replacement</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Worn out key pads</TableCell>
                            <TableCell><Typography style={toBeUsedStyle}>To be used</Typography></TableCell>
                            <TableCell>Inform IT</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

