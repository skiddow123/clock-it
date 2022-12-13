import React from 'react'
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper, Tab } from '@mui/material'

export default function InfoTable() {
    return (
        <div>
            <TableContainer>
                <Table>
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
                            <TableCell>FAULTY CAMERA</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>TO BE USED</TableCell>
                            <TableCell>REPORT FOR REPLACEMENT</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>PA SYSTEM / HORN / INTERCOM NOT WORKING</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>TO BE USED</TableCell>
                            <TableCell>REPORT FOR REPLACEMENT</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>SEAT CAN'T ADJUST</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>TO BE USED</TableCell>
                            <TableCell>REPORT FOR REPAIR</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>GPS NOT WORKING</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>TO BE USED</TableCell>
                            <TableCell>REPORT FOR REPAIR</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>BROKEN WIPER</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>TO BE USED</TableCell>
                            <TableCell>REPORT FOR REPLACEMENT</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>JOYSTICK COVER OFF</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>TO BE USED</TableCell>
                            <TableCell>REPORT FOR REPAIR</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>SPREADER INDICATOR LIGHTS NOT WORKING</TableCell>
                            <TableCell>NOT TO BE USED</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>REPORT FOR REPAIR</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>VERY POOR VISIBILITY</TableCell>
                            <TableCell>NOT TO BE USED</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>REPORT FOR CLEANING</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>DGPS NOT WORKING</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>TO BE USED</TableCell>
                            <TableCell>REPORT FOR REPAIR</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>WHEEL PROTECTOR NOT PRESENT / DAMAGED</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>TO BE USED</TableCell>
                            <TableCell>REPORT FOR REPLACEMENT</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>WORM OUT KEY PADS</TableCell>
                            <TableCell>{null}</TableCell>
                            <TableCell>TO BE USED</TableCell>
                            <TableCell>INFORM IT</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

