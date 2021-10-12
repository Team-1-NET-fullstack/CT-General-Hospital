
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';

import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LeftSidenavComponent } from './shared/components/left-sidenav/left-sidenav.component';
import { RightSidenavComponent } from './shared/components/right-sidenav/right-sidenav.component';
import { TopComponent } from './shared/components/center-content/top/top.component';
import { MiddleComponent } from './shared/components/center-content/middle/middle.component';
import { BottomComponent } from './shared/components/center-content/bottom/bottom.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { AuthDirective } from './shared/directives/auth.directive';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { MedicalInformationComponent } from './components/medical-information/medical-information.component';
import { AdminComponent } from './components/admin/admin.component';
import { EmployeeCardComponent } from './components/admin/employee-card/employee-card.component';
import { MatCardModule } from '@angular/material/card';
import { PatientCardComponent } from './components/admin/patient-card/patient-card.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { FAQsComponent } from './shared/components/faqs/faqs.component';
import { AddEmployeeComponent } from './components/admin/add-employee/add-employee.component';
import { ChangePasswordComponent } from './shared/components/change-password/change-password.component';

import { MatRadioModule } from '@angular/material/radio';
import { MyAccountComponent } from './shared/components/my-account/my-account.component';
import { TermsConditionsComponent } from './shared/components/terms-conditions/terms-conditions.component';

import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path:'employee-card',
    component:EmployeeCardComponent
  },
  {
    path:'patient-card',
    component:PatientCardComponent
  },
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
{
  path:'my-account',
  component:MyAccountComponent
},
{
  path:'change-password',
  component:ChangePasswordComponent
},
{
  path:'faqs',
  component:FAQsComponent
},
{
  path:'terms-conditions',
  component:TermsConditionsComponent
}

  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'home',
  //   component: MainLayoutComponent,
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    LeftSidenavComponent,
    RightSidenavComponent,
    TopComponent,
    MiddleComponent,
    BottomComponent,
    LoaderComponent,
    AuthDirective,
    CapitalizePipe,
    MedicalInformationComponent,
    AdminComponent,
    EmployeeCardComponent,
    PatientCardComponent,
    DashboardComponent,
    FAQsComponent,
    AddEmployeeComponent,
    ChangePasswordComponent,
    MyAccountComponent,
    TermsConditionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    AngularMaterialModule,
    HttpClientModule,
    MatExpansionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
