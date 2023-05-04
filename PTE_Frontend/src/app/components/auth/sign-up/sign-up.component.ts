import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  success=false;
  registerForm:FormGroup = new FormGroup({
    fullName: new FormControl(''),
    //avatar: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    experience: new FormControl(''),
    password: new FormControl(''),
    Cpassword: new FormControl(''),
    phone: new FormControl(''),
    birthDate: new FormControl(''),
    FS: new FormControl(''),
    nationality: new FormControl(''),
    address: new FormControl(''),
    department: new FormControl(''),
    hiringDate: new FormControl(''),
    drivingLicense: new FormControl('')
  });
  constructor(private authService: AuthServiceService, private router:Router) { }

  ngOnInit(): void {}
  onSubmit(){
      console.log(this.registerForm)
      this.authService.signup(this.registerForm)
      this.router.navigate(['/signin'])
  }

}
