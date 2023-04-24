import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @ViewChild(MatMenuTrigger)trigger!: MatMenuTrigger;
  someMethod() {
    this.trigger.openMenu();
  }
  isAuthenticated: boolean = false;

  constructor(private userService: UserServiceService,
    private authService: AuthServiceService,
    private router:Router) {

  }
  ngOnInit(){}
  logout(){
    this.authService.logout();
  }


}
