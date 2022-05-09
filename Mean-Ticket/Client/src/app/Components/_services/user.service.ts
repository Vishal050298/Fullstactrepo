import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../__classes/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  registerUser(user: User):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
    });
    return this.http.post("http://localhost:8080/users/signUp",user,{headers:headers});
  }
}
