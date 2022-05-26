import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Signin_Data } from '../__classes/login';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signin_Data = new  Signin_Data("","");

  constructor(private authService: AuthService, private router:Router,public flashMessagesService: FlashMessagesService)
   { 
      if(this.authService.signedIn()) {
        this.router.navigateByUrl('/home');
      }
      {this.authService.signedIn}
   }

  ngOnInit(): void {
    const user = localStorage.getItem('user')

    if(user) {
      this.router.navigateByUrl('home');
    }
  }

  onLoginSubmit() {
    const signin_Data = new Signin_Data(this.signin_Data.username, this.signin_Data.password);

    this.authService.authenticationUser(signin_Data).subscribe(res => {
      if(res.accessToken) {
        console.log(res)
        this.authService.storeUserData(res.accessToken, res.token);
        this.authService.issignedin = true
        this.authService.user = res.Result
        this.flashMessagesService.show('Signed In Successfully...!!!',{cssClass: 'alert-danger',timeout: 4500});
        this.router.navigate(['home']);
      }


      if(res.message){
        this.flashMessagesService.show(res.message, {cssClass: 'alert-danger',timeout:4500});
        this.router.navigate(['signin']);
      }
   
    });
  }
}
