// import express from 'express';
import mongoose from 'mongoose';

import Ticket from '../model/ticket.js';


export const createTicket = async (req, res) => {
    const ticket = req.body;
    // console.log(ticket)
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();

    const Day = d.toString() + '/' + m.toString() + '/' + y.toString();

    const newTicket = new Ticket({ ...ticket, empid: ticket.empid, ticket_desc: ticket.ticket_desc, create_at: Day, Date: new Date().toISOString() })

    try {
        await newTicket.save();
        console.log(newTicket)
        res.status(200).json(newTicket)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const updateTicket = async (req, res) => {

    const ticket = req.body;

    const{ _id } = req.body

    const updateTicket = { ...ticket, updated_at: new Date().toISOString(), _id }

    const updatedTicket = await Ticket.findByIdAndUpdate(_id, updateTicket, { new: true });
    
    res.json(updatedTicket);
}


export const getTickets = async (req, res) => {
    try {
        const ticket = await Ticket.find().sort({ _id: 1 });
        res.status(200).json(ticket);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const deleteTicket = async (req, res) => {
    
    const ticket = req.body;
    
    const { id } = req.params;
   
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No ticket with id: ${id}`);

    const deleteTicket = ({...ticket, resolved: true, empid: ticket.empid, ticket_desc: ticket.ticket_desc, deleted_at: new Date(), Date: new Date().toISOString(), id: id }); 

    const delTicket = await Ticket.findByIdAndUpdate(id, deleteTicket, {new: true});
    res.json(delTicket);
}

