import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService{

  api:string= "http://localhost:3001/api/users/"

  private userID! :string
  private user!: User;
  constructor(private http:HttpClient, private router:Router) { }


  
  getUserRequest():Observable<any> {
    return this.http.get(this.api + "signup/requests").pipe(
      catchError(throwError)
    );
  }
  getExternalEmployees(): Observable<any>{
    return this.http.get(this.api + "sousTraitant").pipe(
      catchError(throwError)
    );
  }
  getEmployees(): Observable<any>{
    return this.http.get(this.api + "getall").pipe(
      catchError(throwError)
    );
  }
}
