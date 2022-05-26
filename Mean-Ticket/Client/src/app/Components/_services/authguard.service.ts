import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  user: any
  constructor(private authService: AuthService, private router : Router ) { }

    canActivate() {

      if(this.authService.signedIn()) {
        this.authService.issignedin = true

        return true;
      }
      else {
        this.router.navigate(['/signin']);

        return false
      }
    }

}
