import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthDirective } from './shared/directives/auth.directive';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { MedicalInformationComponent } from './components/medical-information/medical-information.component';
import { AdminComponent } from './components/admin/admin.component';
import { PatientDemographicsComponent } from './components/Patient/patient-demographics/patient-demographics.component';
import { PatientAllergyComponent } from './components/Patient/patient-allergy/patient-allergy.component';
import { SignupComponent } from './components/Patient/signup/signup.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'patient-signup',
    component: SignupComponent,
  },
  {
    path: 'patient-demographics',
    component: PatientDemographicsComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AuthDirective,
    CapitalizePipe,
    MedicalInformationComponent,
    AdminComponent,
    PatientDemographicsComponent,
    PatientAllergyComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
