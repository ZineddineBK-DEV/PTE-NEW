import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
  imagesURL:string="http://localhost:3001/images/"
  users!: User[];
  employeesCount!:number
  user!:User;
  constructor(private userService: UserServiceService,
    private authService: AuthServiceService,
    private router:Router) { }

    ngOnInit(): void {  
      this.userService.getEmployees().subscribe(resultat=>{
        this.users = resultat as User[]; 
        this.employeesCount = this.users.length;
        console.log(this.users) 
      });
      
      
    }
}
