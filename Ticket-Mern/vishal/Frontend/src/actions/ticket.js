import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constant';
import Ticket from '../services/ticket.js';

export const createTicket = (ticket) => async dispatch => {
    try {
        
        const { data } = await Ticket.createTicket(ticket);
       

        dispatch({ type: CREATE , data })

    }
    catch (error) {
        throw error
    }
}

export const getTickets = () => async dispatch => {
    try {
        
        const {data} = await Ticket.getTickets();
        
        dispatch({ type: FETCH_ALL, data })
    }
    catch (error) {
        throw error
    }
}

export const updateTicket = (ticket) => async dispatch => {
    try{
       
        const {data} = await Ticket.updateTicket(ticket)
        dispatch({type: UPDATE, data})
    }
    catch(error){
        throw error
    }
}

export const deleteTicket = (id) => async dispatch => {
    try{
        
        const {data}=await Ticket.deleteTicket(id)
        
        dispatch({type: DELETE, payload:data})
    }
    catch(error){
        throw error
    }
}   