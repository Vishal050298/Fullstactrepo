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

    console.log(req.body)
    const ticket = req.body;

    const{_id}= req.body

    // if(!mongoose.Types.ObjectId.isValid(_id)) return res.send(`No ticket with id: ${_id}`);

    const updateTicket = { ...ticket, updated_at: new Date().toISOString(), _id }

    const updatedTicket = await Ticket.findByIdAndUpdate(_id, updateTicket, { new: true });
    console.log('updatedTicket')
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
    
    try{
    const { id } = req.params;
    console.log(id)
    
    //if (!mongoose.Types.ObjectId.isValid(id)) return res.send(`No ticket with id: ${id}`);

    await Ticket.findByIdAndDelete( id );

    res.json({message: "Ticket Deleted Successfully...!!!"});
    }
    catch(error){
        console.log(error)
    }
}

