import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Container, Typography } from '@mui/material'
import './InfoTable.css'

export default function InfoTable() {
    return (
        <div className='infotable'>
            <Container component={Paper} elevation={3}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>eRTG/RTG EQUIPMENT FAULTS</TableCell>
                            <TableCell>NOT TO BE USED</TableCell>
                            <TableCell>TO BE USED</TableCell>
                            <TableCell>ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Faulty Camera</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>To be used</TableCell>
                            <TableCell>Report for replacement</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>PA System or Horn or Intercom not working</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>To be used</TableCell>
                            <TableCell>Report for replacement</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Seat can't adjust</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>To be used</TableCell>
                            <TableCell>Report for repair</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>GPS not working</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>To be used</TableCell>
                            <TableCell>Report for repair</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Broken wiper</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>To be used</TableCell>
                            <TableCell>Report for replacement</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Joystick Cover off</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>To be used</TableCell>
                            <TableCell>Report for repair</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Spreader Indicator Lights not working</TableCell>
                            <TableCell><Typography style={{color: "#FFCCCB"}}>Not to be used</Typography></TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>Report for repair</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Very Poor Visibilit</TableCell>
                            <TableCell>Not to be used</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>Report for cleaning</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>DGPS not working</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>To be used</TableCell>
                            <TableCell>Report for repair</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Wheel Projector not present or damaged</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>To be used</TableCell>
                            <TableCell>Report for replacement</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Worn out key pads</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>To be used</TableCell>
                            <TableCell>Inform IT</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Container>
        </div>
    )
}

