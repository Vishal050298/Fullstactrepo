import axios from 'axios';

const baseUrl = 'http://localhost:8080'

class Ticket  {
  createTicket = (newTicket) => {
    return axios.post(`${baseUrl}/tickets`, newTicket)
  }

  getTickets = () => {
    return axios.get(`${baseUrl}/tickets`)
  }

  updateTicket = (ticket) => {
    return axios.put(`${baseUrl}/tickets/updateTicket`, ticket)
  }

  deleteTicket = (id) => {
    return axios.delete(`${baseUrl}/tickets/${id}`)
  }
}
export default new Ticket();
