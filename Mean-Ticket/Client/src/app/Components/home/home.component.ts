import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { TicketService } from '../shared/ticket.service';
import { Ticket } from '../shared/ticket.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Columnsdisplayed = ['ticket_desc', 'empid', 'empname', 'created_at', 'updated_at', 'deleted_at', 'Edit', 'Delete'];
  dataSource = new MatTableDataSource<Ticket>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.resetForm();
    this.getTickets();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  constructor(public ticketservice: TicketService, public authservice: AuthService, private _liveAnnouncer: LiveAnnouncer) {
    this.ticketservice.selectedTicket = {
      _id: '',
      ticket_desc: '',
      empid: 0,
      empname: authservice.user.name,
      creator: authservice.user._id,
      created_at: '',
      updated_at: '',
      deleted_at: '',
      Date: null,
      Resolved: false,
    };
  }
  getTickets() {
    this.ticketservice.getTickets().subscribe((res) => {
      this.ticketservice.Tickets = res as Ticket[];
      this.dataSource = new MatTableDataSource(this.ticketservice.Tickets);
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  SortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    }
    else {
      this._liveAnnouncer.announce('Sorting is cleared');
    }
  }
  onSubmit(form: NgForm) {
    form.value.creator = this.authservice.user._id;
    form.value.empname = this.authservice.user.name;
    if (form.value._id == "" || form.value._id == null) {
      this.ticketservice.postTickets(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getTickets();
      });
    }
    else {
      this.ticketservice.putTickets(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getTickets();
      });
    }
  }
  onEdit(M: Ticket) {
    this.ticketservice.selectedTicket = M;
  }
  resetForm(form?: NgForm) {
    if (form) {
      this.ticketservice.selectedTicket._id = '';
      this.ticketservice.selectedTicket.ticket_desc = '';
      this.ticketservice.selectedTicket.empname = this.authservice.user.name;
      this.ticketservice.selectedTicket.empid = 0;
    }
    this.ticketservice.selectedTicket._id = '';
    this.ticketservice.selectedTicket.ticket_desc = '';
    this.ticketservice.selectedTicket.empname = this.authservice.user.name;
    this.ticketservice.selectedTicket.empid = 0;
  }
  onClose() {
    this.getTickets();
  }
  onDelete(element: Ticket) {
    if(confirm('Are You Sure? You Want To Delete This Ticket???') == true) {
      this.ticketservice.deleteTickets(element).subscribe((res) => {
        this.getTickets();
      });
    }
  }
  Moment(element: any) {
    return moment(element).fromNow();
  }
}


