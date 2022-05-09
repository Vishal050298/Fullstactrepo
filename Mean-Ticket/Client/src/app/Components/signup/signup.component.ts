import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../__classes/user';
import { UserService } from '../_services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: User = new User("", "", "", "");

  constructor(private userService:UserService, private router:Router,public flashMessagesService:FlashMessagesService) { }

  onRegistrationSubmit() {
    this.userService.registerUser(this.model).subscribe(res => {
      if(res.Result) {
        this.flashMessagesService.show(res.message,{ cssClass: 'alert-danger',timeout:4500 });
        this.router.navigate(['/signin']);
      }
    });
  }

  ngOnInit(): void {
  }

}
