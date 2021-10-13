import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LeftSidenavComponent } from './shared/components/left-sidenav/left-sidenav.component';
import { RightSidenavComponent } from './shared/components/right-sidenav/right-sidenav.component';
import { TopComponent } from './shared/components/center-content/top/top.component';
import { MiddleComponent } from './shared/components/center-content/middle/middle.component';
import { BottomComponent } from './shared/components/center-content/bottom/bottom.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AdminComponent } from './components/admin/admin.component';
import { PatientVisitComponent } from './components/patient/patient-visit/patient-visit.component';
import { PatientDetailsComponent } from './components/patient/patient-details/patient-details.component';
import { MedicalInformationComponent } from './components/patient/medical-information/medical-information.component';
import { VitalSignsComponent } from './components/patient/vital-signs/vital-signs.component';
import { DiagnosisDetailsComponent } from './components/patient/diagnosis-details/diagnosis-details.component';
import { ProcedureDetailsComponent } from './components/patient/procedure-details/procedure-details.component';
import { MedicationDetailsComponent } from './components/patient/medication-details/medication-details.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


import { EmployeeCardComponent } from './components/admin/employee-card/employee-card.component';

import { PatientCardComponent } from './components/admin/patient-card/patient-card.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { FAQsComponent } from './shared/components/faqs/faqs.component';
import { AddEmployeeComponent } from './components/admin/add-employee/add-employee.component';
import { ChangePasswordComponent } from './shared/components/change-password/change-password.component';

import { MyAccountComponent } from './shared/components/my-account/my-account.component';
import { TermsConditionsComponent } from './shared/components/terms-conditions/terms-conditions.component';

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
,
  {
    path: '',
    redirectTo: '/SignIn',
    pathMatch: 'full',
    
  },
  {
    path: 'signin',
    component: SignInComponent,

  },
  {
    path: 'home',
    component: MainLayoutComponent,
  },
  {
    path: 'patient-visit',
    component: PatientVisitComponent,
  },
  {
    path: 'vital-signs',
    component: VitalSignsComponent,
  },
  {
    path: 'diagnosis-details',
    component: DiagnosisDetailsComponent,
  },
  {
    path: 'procedure-details',
    component: ProcedureDetailsComponent,
  },
  {
    path: 'medication-details',
    component: MedicationDetailsComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  SignInComponent,

  MainLayoutComponent,
  HeaderComponent,
  LeftSidenavComponent,
  RightSidenavComponent,
  TopComponent,
  MiddleComponent,
  BottomComponent,
  LoaderComponent,
  PageNotFoundComponent,
  AdminComponent,
  PatientVisitComponent,
  PatientDetailsComponent,
  MedicalInformationComponent,
  VitalSignsComponent,
  DiagnosisDetailsComponent,
  ProcedureDetailsComponent,
  MedicationDetailsComponent,
  EmployeeCardComponent,
  PatientCardComponent,
  DashboardComponent,
  FAQsComponent,
  AddEmployeeComponent,
  ChangePasswordComponent,
  MyAccountComponent,
  TermsConditionsComponent,
];
