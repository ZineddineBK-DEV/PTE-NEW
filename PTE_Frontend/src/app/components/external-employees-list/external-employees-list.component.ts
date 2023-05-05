import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-external-employees-list',
  templateUrl: './external-employees-list.component.html',
  styleUrls: ['./external-employees-list.component.css']
})
export class ExternalEmployeesListComponent {
  imagesURL:string="http://localhost:3001/images/"
  users!: User[];
  employeesCount!:number
  user!:User;
  constructor(private userService: UserServiceService,
    private authService: AuthServiceService,
    private router:Router) { }

    ngOnInit(): void {  
      this.userService.getExternalEmployees().subscribe(resultat=>{
        this.users = resultat as User[]; 
        this.employeesCount = this.users.length;
        console.log(this.users) 
      });
      
    }
}
