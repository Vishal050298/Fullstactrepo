import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormGroup, InputLabel, Input } from '@material-ui/core';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { updateTicket } from '../actions/ticket';
import { useDispatch } from 'react-redux'

const EditForm = ({cellValues}) => {

    const [ticket, setTicket] = useState(cellValues.row)
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)
    
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
        setTicket({...ticket, empid:'', ticket_desc:''})
    }
    return (
        <>
            <Button disabled={!(user.accessToken.fullname === cellValues.row.empname)||cellValues.row.deleted_at} onClick={handleClickOpen}>
                <EditTwoToneIcon />
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