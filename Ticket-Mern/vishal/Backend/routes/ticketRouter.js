import express from 'express';
import { createTicket, updateTicket, getTickets, deleteTicket}from '../controller/TicketController.js';
const router = express.Router();


router.get('/',getTickets)
router.post('/',createTicket)
router.put('/updateTicket',updateTicket)
router.post('/:id',deleteTicket)

export default router;