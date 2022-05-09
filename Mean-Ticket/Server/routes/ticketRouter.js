import express from 'express';
import { createTicket, updateTicket, getTickets, deleteTicket }from '../controller/TicketController.js';
const router = express.Router();

router.get('/',getTickets)
router.post('/',createTicket)
router.patch('/:id',updateTicket)
router.post('/delete',deleteTicket)

export default router;