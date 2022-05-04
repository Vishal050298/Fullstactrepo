import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FormGroup, InputLabel, Input } from '@material-ui/core';
//import { useResolvedPath } from 'react-router-dom';
import { createTicket } from '../actions/ticket';
import { getTickets } from '../actions/ticket';
import { updateTicket } from '../actions/ticket';
import { useDispatch, useSelector } from 'react-redux'
import TicketGrid from "./TicketGrid";
import { Box } from "@mui/material";

export default function FormDialog() {
  const [userold] = useState(JSON.parse(localStorage.getItem('user')))

  const [ticket, setticket] = useState({ empid: "", ticket_desc: "", empname: userold?.accessToken.fullname });

  const dispatch = useDispatch();

  const allTickets = useSelector((ticket) => ticket.ticket)


  const tickets = useSelector(store => store.ticket)


  const [currentId, setCurrentId] = useState(0);

  const Tickets = useSelector((state) => (currentId ? state.tickets.find((message) => message._id === currentId) : null))

  useEffect(() => {
    if (Tickets) setticket(Tickets);
  }, [Tickets]);

  useEffect(() => {
    dispatch(getTickets())
  }, [currentId, dispatch])

  const validateDetails = (e) => {
    e.preventDefault();

    dispatch(createTicket(ticket));
    setCurrentId(0);
    setticket({ ...ticket, empid: '', ticket_desc: '' });
    setOpen(false)
  }
  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Box testAlign='center' style={{margin:'20px 0 ', display:'flex', justifyContent:'center'}}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add Ticket
        </Button>
      </Box>
      

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle align="center">ADD DETAILS PROPERLY</DialogTitle>
        <DialogContent>
          <FormGroup>
            <InputLabel htmlFor="empid">Employee_ID</InputLabel>
            <Input
              onChange={(e) => setticket({ ...ticket, empid: e.target.value })}
              required
              name="empid"
              value={ticket.empid}
              id="empid"
              inputProps={{ maxLength: 50 }}
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
            onChange={(e) => setticket({ ...ticket, ticket_desc: e.target.value })}
            sx={{ marginTop: "20px", width: 500 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={validateDetails}>Submit</Button>
        </DialogActions>
      </Dialog>
      <TicketGrid />
    </div>
  )
}
