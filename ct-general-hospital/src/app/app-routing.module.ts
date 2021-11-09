import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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
import { DisplayAppointmentsComponent } from './shared/components/display-appointments/display-appointments.component';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { MasterComponent } from './components/admin/master/master.component';
import { ProcedureComponent } from './components/admin/procedure/procedure.component';
import { DiagnosisComponent } from './components/admin/diagnosis/diagnosis.component';
import { MedicationComponent } from './components/admin/medication/medication.component';
import { AllergyComponent } from './components/admin/allergy/allergy.component';
import { DeclinedComponent } from './components/inbox/declined/declined.component';
import { UpcomingComponent } from './components/inbox/upcoming/upcoming.component';
import { NotesComponent } from './components/inbox/notes/notes.component';
import { SendComponent } from './components/inbox/send/send.component';
import { SentComponent } from './components/inbox/sent/sent.component';
import { ReceivedComponent } from './components/inbox/received/received.component';
import { PatientVisitDetailsComponent } from './components/Patient/patient-visit-details/patient-visit-details.component';
import { DoctorDashboardComponent } from './components/Patient/doctor-dashboard/doctor-dashboard.component';

const routes: Routes = [
  //main
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'registration', component: SignupComponent },
  { path: 'changePassword', component: ChangePasswordComponent },

  //admin
  {
    path: 'admin',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
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
    ],
  },

  //doctor
  {
    path: 'doctor',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DoctorDashboardComponent,
      },
      {
        path: 'dashboard',
        component: DoctorDashboardComponent,
      },
      // {
      //   path: 'patient-visit',
      //   component: PatientVisitComponent,
      // },
      {
        path: 'patient-visit/:patientId',
        component: PatientVisitComponent,
      },
      {
        path: 'appointment',
        component: AppointmentsComponent,
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
        component: PatientDemographicsComponent,
      },
      {
        path: 'patient-profile',
        component: PatientProfileComponent,
      },
    ],
  },

  //nurse
  {
    path: 'nurse',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DoctorDashboardComponent,
      },
      {
        path: 'dashboard',
        component: DoctorDashboardComponent,
      },
      {
        path: 'patient-visit',
        component: PatientVisitComponent,
      },
      {
        path: 'appointment',
        component: AppointmentsComponent,
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
        path: 'patient-visit/:patientId',
        component: PatientVisitComponent,
      },
      // {
      //   path: 'patient-visit',
      //   component: PatientVisitComponent,
      // },
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
        path: 'notes',
        component: NotesComponent,
      },
      {
        path: 'upcoming',
        component: UpcomingComponent,
      },
      {
        path: 'patient-details',
        component: PatientDemographicsComponent,
      },
      {
        path: 'master',
        component: MasterComponent,
      },
      {
        path: 'patient-profile',
        component: PatientProfileComponent,
      },
      {
        path: 'patient-visit-detials',
        component: PatientVisitDetailsComponent,
      },
      {
        path: 'nurse-dashboard',
        component: DoctorDashboardComponent,
      },
    ],
  },

  //patient
  {
    path: 'patient',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DisplayAppointmentsComponent,
      },
      {
        path: 'dashboard',
        component: DisplayAppointmentsComponent,
      },
      {
        path: 'patient-visit/:patientId',
        component: PatientVisitComponent,
      },
      {
        path: 'appointment',
        component: AppointmentsComponent,
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
        path: 'patient-demographics',
        component: PatientDemographicsComponent,
      },
    ],
  },

  //not found
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, BrowserModule],
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
  DeclinedComponent,
  UpcomingComponent,
  NotesComponent,
  SendComponent,
  SentComponent,
  ReceivedComponent,
  PatientVisitDetailsComponent,
  DoctorDashboardComponent,
];
