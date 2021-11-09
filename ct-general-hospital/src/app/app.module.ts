import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { SyncfusionModule } from './modules/syncfusion/syncfusion.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthDirective } from './shared/directives/auth.directive';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { CommonModule } from '@angular/common';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  MonthAgendaService,
} from '@syncfusion/ej2-angular-schedule';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserService } from './core/services/user/user.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AuthDirective,
    CapitalizePipe,
    EditUserComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SyncfusionModule,
    HttpClientModule,
    CommonModule,
    ScheduleModule
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
