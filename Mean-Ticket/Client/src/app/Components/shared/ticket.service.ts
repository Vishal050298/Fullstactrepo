import { Injectable } from '@angular/core';
import { Ticket } from './ticket.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  selectedTicket: Ticket = new Ticket;
  Tickets: Ticket[] = [];
  baseURL = 'http://localhost:8080/tickets';
  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http.get(this.baseURL);
  }
  postTickets(M: Ticket) {
    return this.http.post(this.baseURL,M);
  }
  putTickets(M: Ticket) {
    return this.http.patch(this.baseURL + `/${M._id}`,M);
  }
  deleteTickets(element: Ticket) {
    return this.http.post('http://localhost:8080/tickets/delete',element);
  }
}
