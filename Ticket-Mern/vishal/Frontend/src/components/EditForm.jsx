import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormGroup, InputLabel, Input } from '@material-ui/core';
//import { useDispatch } from "react-redux";
//import { updateTicket } from "../actions/ticket";
//import { useResolvedPath } from 'react-router-dom';
//import { createTicket } from '../actions/ticket';
//import { getTickets } from '../actions/ticket';
import { updateTicket } from '../actions/ticket';
import { useDispatch, useSelector } from 'react-redux'
//import TicketGrid from "./TicketGrid";
const EditForm = ({cellValues}) => {

    const [ticket, setTicket] = useState(cellValues.row)
    
    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const dispatch = useDispatch();
    const validateDetails  = (e) => {
        dispatch(updateTicket(ticket))
        //setCurrentId(0)
        setTicket({...ticket, empid:'', ticket_desc:''})
    }
    return (
        <>
            <Button variant='contained' color='primary' onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle align="center">Edit Ticket</DialogTitle>
                <DialogContent>
                    <FormGroup>
                        <InputLabel htmlFor="empid">Employee_ID</InputLabel>
                        <Input
                            onChange={(e) => setTicket({ ...ticket, empid: cellValues.row.empid })}
                            required
                            name="empid"
                            value={ticket.empid}
                            id="empid"
                            inputProps={{ maxLength: 50 }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <InputLabel htmlFor="_id"></InputLabel>
                        <Input
                            onChange={(e) => setTicket({ ...ticket, empid: cellValues.row._id })}
                            name="_id"
                            value={cellValues.row._id}
                            id="_id"
                            inputProps={{ maxLength: 50 }}
                            hidden={true}
                        />
                    </FormGroup>
                    <TextField
                        sx={{
                            width: 500,
                            maxwidth: "100%",
                            marginTop: "30px",
                        }}
                        disabled
                        id="outlined-disabled"
                        label="Employee_Name"
                        defaultValue={ticket.empname}
                    />
                    <TextField
                        id="outlined-disabled"
                        label="Description"
                        required
                        name="ticket_desc"
                        value={ticket.ticket_desc}
                        onChange={(e) => setTicket({ ...ticket, ticket_desc: e.target.value })}
                        sx={{ marginTop: "20px", width: 500 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={validateDetails}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default EditForm