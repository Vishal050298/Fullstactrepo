import express from 'express';
import mongoose from 'mongoose';
import moment from 'moment';
import Ticket from '../model/ticket.js';


export const createTicket = async (req, res) => {
    const { empid, ticket_desc,creator,empname } = req.body;
    
    console.log(req.body)
    const newTicket = new Ticket({ empid:empid, ticket_desc:ticket_desc,creator:creator, created_at:moment().format("MMMM DO YYYY, h:mm:ss a"),empname:empname,Date:moment().toISOString()});
    console.log(newTicket);
    try {
        await newTicket.save();
        
        res.status(201).json(newTicket)

    } catch (error) {
       
        res.status(409).json({ message: error.message })
    }

}

export const updateTicket = async (req, res) => {

    const ticket = req.body;
    const{ id }= req.params;

    const { empid, ticket_desc, empname, creator } = req.body;
    //console.log(req.body);
    
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No Ticket with this id :${id} is generated`);

    const updateTicket = {...ticket, creator, empid, ticket_desc, updated_at: moment().format("MMMM Do YYYY, h:mm:ss a"),_id:id};
    
    await Ticket.findByIdAndUpdate(id,updateTicket,{new: true});
    res.json(updateTicket);
}

export const getTickets = async (req, res) => {
    try {
        const ticket = await Ticket.find().sort({ _id: -1 });
       // console.log(ticket);
        res.status(200).json(ticket);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const deleteTicket = async (req, res) => {
    const ticket = req.body;
    console.log(ticket);

    const { _id } = req.body;

    const { empid, ticket_desc , empname ,creator } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send(`No Ticket with id: ${_id} is generated`);
    
        const deleteTicket = {...ticket, Resolved:true, creator, empid, empname, ticket_desc, deleted_at:moment().format("MMMM Do YYYY, h: mm ss a"),_id:_id};

        await Ticket.findByIdAndUpdate(_id,deleteTicket,{new:true});
        res.json(deleteTicket);
}

