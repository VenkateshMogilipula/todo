import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='Venkatesh'
  password=''
  errorMessage='Invalid Credentials'
  invalidLogin=false

  constructor(private _route:Router,public auth:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.auth.authenticate(this.username,this.password)){
        this._route.navigate(['welcome',this.username])
        this.invalidLogin=false
    }
    else{
      this.invalidLogin=true
    }
  }

}
