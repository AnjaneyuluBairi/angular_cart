import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
 can_login=true;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),

    });
   }

  ngOnInit() {
  }

   onSubmit() {
  
    let uname=this.loginForm.get('username');
    let pword=this.loginForm.get('password');
   console.log(this.loginForm.get('username'));
    if(uname=="admin" && pword=="admin"){
      this.can_login=false;
       console.warn('Your login has been confirmed');
    }
    else{
     console.warn('enter correct details');
    }
    
  }

}