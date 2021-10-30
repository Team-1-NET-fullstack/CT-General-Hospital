import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { SyncfusionModule } from './modules/syncfusion/syncfusion.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthDirective } from './shared/directives/auth.directive';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  MonthAgendaService,
} from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AuthDirective,
    CapitalizePipe,
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
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
