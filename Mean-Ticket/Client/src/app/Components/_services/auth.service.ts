import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login_Data } from '../__classes/login';
import { User } from '../__classes/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  login_Data!: Login_Data;
  user!: User;
  isloggedin: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  authenticationUser(login_Data: Login_Data): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post("http://localhost:8080/users/signIn", login_Data, { headers: headers });
  }

  storeUserData(user: any, token: any) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken =  token;

    this.user =  user;
  }

  logout() {
    this.authToken = null;

    localStorage.clear();
  }

  loadToken() {
    this.authToken = localStorage.getItem("id_token");
    this.user = JSON.parse(localStorage.getItem('user')|| '{}')
  }

  loggedIn() {
    const helper = new JwtHelperService();
    this.loadToken()
    const isNotExpired = !helper.isTokenExpired(this.authToken);

    return isNotExpired;
  }

}


