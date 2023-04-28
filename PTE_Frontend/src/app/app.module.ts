import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import { RegisterRequestComponent } from './components/register-request/register-request.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { ExternalEmployeesListComponent } from './components/external-employees-list/external-employees-list.component';
import { ActionPlanComponent } from './components/action-plan/action-plan.component';
import { EnvironementLabsComponent } from './components/environement-labs/environement-labs.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { ConferenceRommsComponent } from './components/conference-romms/conference-romms.component';
import { TechnicalTeamComponent } from './components/technical-team/technical-team.component';
import { TeamorganizationalChartComponent } from './components/teamorganizational-chart/teamorganizational-chart.component'; 
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    NavBarComponent,
    RegisterRequestComponent,
    EmployeesListComponent,
    ExternalEmployeesListComponent,
    ActionPlanComponent,
    EnvironementLabsComponent,
    VehiclesComponent,
    ConferenceRommsComponent,
    TechnicalTeamComponent,
    TeamorganizationalChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
