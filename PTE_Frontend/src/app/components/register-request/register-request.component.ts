import { Token } from '@angular/compiler';
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
  imagesURL:string="http://localhost:3001/images/"
  users!: User[];
  employeesCount!:number
  user!:User;
  userID!:string
  searchText: any
  constructor(private userService: UserServiceService,
    private authService: AuthServiceService,
    private router:Router) { }

    ngOnInit(): void {  
       this.authService.getUser().subscribe(resultat => {
         this.user=resultat as User;
         console.log(this.user._id,this.user.fullName);
       });
      this.loadRequests();
    }
    loadRequests(){
      this.userService.getUserRequest().subscribe(resultat=>{
        this.users = resultat as User[];
        this.employeesCount = this.users.length;
        //console.log(this.users) 
      });
    }
    confirmRequest(userID: string){
      this.userService.confirmUserRequest(userID).subscribe(resultat=>{
        console.log("user confirmed!")
    })}
    declineRequest(userID: string){
      this.userService.declineUserRequest(userID).subscribe(resultat=>{
        console.log("user declined!")
    })}


}
