import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { RegisterRequestComponent } from './components/register-request/register-request.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { ExternalEmployeesListComponent } from './components/external-employees-list/external-employees-list.component';
import { ActionPlanComponent } from './components/action-plan/action-plan.component';
import { EnvironementLabsComponent } from './components/environement-labs/environement-labs.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { ConferenceRommsComponent } from './components/conference-romms/conference-romms.component';
import { TechnicalTeamComponent } from './components/technical-team/technical-team.component';
import { TeamorganizationalChartComponent } from './components/teamorganizational-chart/teamorganizational-chart.component';

const routes: Routes = [
   
  {path:'', component:AppComponent},
  /*auth routes*/
  {path:'signin', component:SignInComponent},
  {path:'signup', component:SignUpComponent},
  /*user management routes*/
  {path:'registerRequest' , component:RegisterRequestComponent},
  {path:'employeesList' , component:EmployeesListComponent},
  {path:'externalEmployeesList' , component:ExternalEmployeesListComponent},
  {path:'actionPlan' , component:ActionPlanComponent},
  /*resources booking routes*/
  {path:'environementLabs' , component:EnvironementLabsComponent},
  {path:'vehicle' , component:VehiclesComponent},
  {path:'conferenceRoom' , component:ConferenceRommsComponent},
  {path:'technicalTeam' , component:TechnicalTeamComponent},
  {path:'teamOrganizationalChart' , component:TeamorganizationalChartComponent},

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
