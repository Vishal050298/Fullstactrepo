import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Login_Data } from '../__classes/login';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  login_Data = new  Login_Data("","");

  constructor(private authService: AuthService, private router:Router,public flashMessagesService: FlashMessagesService)
   { 
      if(this.authService.loggedIn()) {
        this.router.navigateByUrl('/home');
      }
      {this.authService.isloggedin}
   }

  ngOnInit(): void {
    const user = localStorage.getItem('user')

    if(user) {
      this.router.navigateByUrl('home');
    }
  }

  onLoginSubmit() {
    const login_Data = new Login_Data(this.login_Data.username, this.login_Data.password);

    this.authService.authenticationUser(login_Data).subscribe(res => {
      if(res.accessToken) {
        console.log(res)
        this.authService.storeUserData(res.accessToken, res.token);
        this.authService.isloggedin = true
        this.authService.user = res.Result
        this.flashMessagesService.show('Loged In Successfully...!!!',{cssClass: 'alert-danger',timeout: 4500});
        this.router.navigate(['home']);
      }


      if(res.message){
        this.flashMessagesService.show(res.message, {cssClass: 'alert-danger',timeout:4500});
        this.router.navigate(['signin']);
      }
   
    });
  }
}
