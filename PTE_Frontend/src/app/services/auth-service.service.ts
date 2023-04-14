import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Form,FormGroup, NgForm } from '@angular/forms';
import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private token? :string;
  private isAuthenticated? : boolean;
  private userID! :string
  private user!: User;
 // private user :User;


  constructor(private http:HttpClient, private router:Router ) { }
  ngOnInit(){}
  
  checkAuth(){
    if (!(this.isAuthenticated))
    {
      this.router.navigate(['login'])
    }
    return false;
    }
  getToken() { return this.token; }
  getUserId() { return this.userID; }

  signup(form:FormGroup){
    let success;
    console.log(form.value)
    const user = {
      fullName:form.value.fullName,
      avatar: form.value.avatar,
      email:form.value.email,
      gender: form.value.gender,
      experience: form.value.experience,
      password: form.value.password,
      Cpassword: form.value.Cpassword,
      phone: form.value.phone,
      birthDate: form.value.birthDate,
      FS: form.value.FS,
      nationality: form.value.nationality,
      address: form.value.address,
      department: form.value.department,
      hiringDate: form.value.hiringDate,
      drivingLicense: form.value.drivingLicense
    }
    this.http.post("http://localhost:3001/api/users/signup",user).subscribe(response => {
      console.log(response)
      if(!response){
        success = false;
        return null;
      }
      success=true
      this.router.navigate(["/login"])
      return response
    })
    return success;
  }

  login(email: string, password: string){
    this.http.post<{token:string,expiresIn:number, id:string}>("http://localhost:3001/api/login",{email:email,password:password}).subscribe(response => {
      //console.log(response);
      this.token=response.token;
      if(this.token){
        this.setAuthTimer(response.expiresIn)
        this.isAuthenticated=true;
        this.userID=response.id;
        //console.log(this.userID);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + response.expiresIn * 1000);
        this.saveAuthData(this.token,expirationDate)
        // this.http.get<{user:User}>(`http://localhost:3000/api/users/${this.userID}`).subscribe(responce => {
        //   this.user=responce.user;
        // })
        this.router.navigate(["/"]);
      }

    })
    return this.token;
  }
  
  logout(){
    this.token="";
    this.isAuthenticated=false;
    this.clearAuthData();

    this.router.navigate(["/login"]);
  }

  setAuthTimer(expiresIn:number){
    setTimeout(() =>{
      this.logout();

    },expiresIn*1000);
  }

  private saveAuthData(token:string, expirationDate:Date){
    localStorage.setItem("token",token);
    localStorage.setItem("expiration",expirationDate.toISOString());
    localStorage.setItem("userId",this.userID);
    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("expiration"))
  }
  
  private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");
  }

  private getAuthData(){
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration")
    this.userID!=localStorage.getItem("userId")
    if(!token || !expirationDate) return null;
    return {token:token,expirationDate:new Date(expirationDate)}
  }


}
