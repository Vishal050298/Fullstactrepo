import { CREATE, UPDATE, DELETE, FETCH_ALL } from '../constant';
import Ticket from '../services/ticket.js';

export const createTicket = (ticket) => async dispatch => {
    try {
        // console.log(ticket)
        const { data } = await Ticket.createTicket(ticket);
        console.log(data)

        dispatch({ type: CREATE , data })

    }
    catch (error) {
        throw error
    }
}

export const getTickets = () => async dispatch => {
    try {
        
        const {data} = await Ticket.getTickets();
        console.log(data)
        dispatch({ type: FETCH_ALL, data })
    }
    catch (error) {
        throw error
    }
}

export const updateTicket = (ticket) => async dispatch => {
    try{
        console.log(ticket)
        const {data} = await Ticket.updateTicket(ticket)
        dispatch({type: UPDATE, data})
    }
    catch(error){
        throw error
    }
}

export const deleteTicket = (id) => async dispatch => {
    try{
        await Ticket.deleteTicket(id)
        
        dispatch({type: DELETE, id})
    }
    catch(error){
        throw error
    }
}   