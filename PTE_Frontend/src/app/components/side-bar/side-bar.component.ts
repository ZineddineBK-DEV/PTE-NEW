import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  role!:string
constructor(private authService:AuthServiceService) {}
ngOnInit(){
  this.authService.getRole();
  };

checkAdmin(){
  this.authService.getRole();
  return this.role?true:false; 

}
}


