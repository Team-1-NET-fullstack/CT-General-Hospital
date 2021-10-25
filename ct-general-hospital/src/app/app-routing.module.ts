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
import { SignInComponent } from './components/sign-in/sign-in.component';
import { EmployeeCardComponent } from './components/admin/employee-card/employee-card.component';
import { PatientCardComponent } from './components/admin/patient-card/patient-card.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { FAQsComponent } from './shared/components/faqs/faqs.component';
import { AddEmployeeComponent } from './components/admin/add-employee/add-employee.component';
import { ChangePasswordComponent } from './shared/components/change-password/change-password.component';
import { MyAccountComponent } from './shared/components/my-account/my-account.component';
import { TermsConditionsComponent } from './shared/components/terms-conditions/terms-conditions.component';
import { PatientVisitComponent } from './components/Patient/patient-visit/patient-visit.component';
import { VitalSignsComponent } from './components/Patient/vital-signs/vital-signs.component';
import { DiagnosisDetailsComponent } from './components/Patient/diagnosis-details/diagnosis-details.component';
import { ProcedureDetailsComponent } from './components/Patient/procedure-details/procedure-details.component';
import { MedicationDetailsComponent } from './components/Patient/medication-details/medication-details.component';
import { PatientDetailsComponent } from './components/Patient/patient-details/patient-details.component';
import { MedicalInformationComponent } from './components/Patient/medical-information/medical-information.component';
import { SignupComponent } from './components/Patient/signup/signup.component';
import { PatientDemographicsComponent } from './components/Patient/patient-demographics/patient-demographics.component';
import { PatientAllergyComponent } from './components/Patient/patient-allergy/patient-allergy.component';
import { PatientProfileComponent } from './components/Patient/patient-profile/patient-profile.component';
import { EditEmployeeComponent } from './components/admin/edit-employee/edit-employee.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { MasterComponent } from './components/admin/master/master.component';
import { ProcedureComponent } from './components/admin/procedure/procedure.component';
import { DiagnosisComponent } from './components/admin/diagnosis/diagnosis.component';
import { MedicationComponent } from './components/admin/medication/medication.component';
import { AllergyComponent } from './components/admin/allergy/allergy.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'registration', component: SignupComponent },
  { path: 'changePassword', component: ChangePasswordComponent },

  //patient

  {
    path: 'patient',
    component: MainLayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'patient-visit', component: PatientVisitComponent },
      {
        path: 'appointment',
        component: AppointmentsComponent,
      },
      {
        path: 'employee-card',
        component: EmployeeCardComponent,
      },
      {
        path: 'patient-card',
        component: PatientCardComponent,
      },

      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'my-account',
        component: MyAccountComponent,
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'faqs',
        component: FAQsComponent,
      },
      {
        path: 'terms-conditions',
        component: TermsConditionsComponent,
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
    path: 'patient-demographics',
    component: PatientProfileComponent,
  },
  {
    path: 'patient-details',
    component: PatientDemographicsComponent,
      },
      {
        path: 'master',
        component: MasterComponent,
      },
    ],
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
  PatientDemographicsComponent,
  SignupComponent,
  PatientAllergyComponent,
  PatientProfileComponent,
  EditEmployeeComponent,
  AppointmentsComponent,
  MasterComponent,
  ProcedureComponent,
  DiagnosisComponent,
  MedicationComponent,
  AllergyComponent,
];
