import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginFailed=false;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService:AuthServiceService,private router:Router) { }
  ngOnInit() {}

  onSubmit(){
    const token= this.authService.login(this.loginForm.value.email!, this.loginForm.value.password!);
    if(token){
      this.loginFailed=false;
      this.router.navigate(['']);
    }else{
      this.loginFailed=true;
    }
  }
}
