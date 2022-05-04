import { CREATE, UPDATE, DELETE, FETCH_ALL } from "../constant";

const ticketReducer = (ticket = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...ticket, action.data]

        case FETCH_ALL:
            // console.log(action.data)
            return action.data

        case UPDATE:
            return ticket.map((ticket) => {
                if (ticket._id !== action.data._id) {
                    return ticket
                } else {
                    return action.data
                }
            })

        case DELETE:
            return ticket.map(ticket => {
                if(ticket._id !== action.id){
                    return ticket
                }else{
                    return ticket
                }
            })
        default:
        return ticket;
    }
}

export default ticketReducer;