import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-register-request',
  templateUrl: './register-request.component.html',
  styleUrls: ['./register-request.component.css']
})
export class RegisterRequestComponent implements OnInit{
  users!: User[];
  employeesCount!:number
  user!:User;
  searchText: any
  constructor(private userService: UserServiceService,
    private authService: AuthServiceService,
    private router:Router) { }

    ngOnInit(): void {  
      // this.authService.getUser().subscribe(user => {
      //   this.user=user.user;
      //   console.log(this.user);
      // });
      this.loadRequests();
    }
    loadRequests(){
      this.userService.getUserRequest().subscribe(resultat=>{
        this.users = resultat as User[]; 
        this.employeesCount = this.users.length;
        console.log(this.users) 
      });
    }

}

