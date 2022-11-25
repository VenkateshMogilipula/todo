import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
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

  constructor(private _route:Router,public auth:HardcodedAuthenticationService,public basicAuth:BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  // onSubmit(){
  //   if(this.auth.authenticate(this.username,this.password)){
  //       this._route.navigate(['welcome',this.username])
  //       this.invalidLogin=false
  //   }
  //   else{
  //     this.invalidLogin=true
  //   }
  // }

  handleBasicAuthLogin(){
    this.basicAuth.executeAuthenticationService(this.username,this.password).subscribe(
      data=>{
        console.log(data);
        this._route.navigate(['welcome',this.username]);
        this.invalidLogin=false
      },
      error=>{
        console.log(error);
        this.invalidLogin=true;
      }
    )
  }

}
