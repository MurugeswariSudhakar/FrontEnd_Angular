import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loading=false;


loginForm = new FormGroup(
  {
    email: new FormControl('',[Validators.required]),
    password:new FormControl('',Validators.required)
  }
);
  //  constructor(public service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
get fl(){
  return this.loginForm.controls;

}
}
