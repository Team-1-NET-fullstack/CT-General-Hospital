import { Injectable } from '@angular/core';
import { Response } from 'src/app/shared/models/response.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {
  Appointment,
  AppointmentCount,
  AppointmentInfo,
} from 'src/app/shared/models/appointment.model';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentSchedulerService {
  currentUser!: number;
  userId: number;
  constructor(private http: HttpClient, private auth: AuthService) {
    this.userId = 4; // this.auth.currentUser.userId;
  }

  getAllAppointments() {
    return this.http.get<Appointment[]>(
      `${environment.appointmentSchedulerApiBaseUrl}GetAllAppointments`
    );
  }

  GetAllAvailablePhysicians(startDate: Date) {
    throw new Error('Method not implemented.');
  }

  createAppointment(newAppointment: any) {
    this.http
      .post(
        `${environment.appointmentSchedulerApiBaseUrl}CreateAppointment`,
        newAppointment
      )
      .subscribe((res) => {
        console.log(res);
        console.log('data inserted successfully');
      });
  }

  updateAppointment(newAppointment: any) {
    this.http
      .put(
        `${environment.appointmentSchedulerApiBaseUrl}AcceptAppointment`,
        newAppointment
      )
      .subscribe((res) => {
        console.log(res);
        console.log('data updated successfully');
      });
  }

  deleteAppointment(Id: any) {
    throw new Error('Method not implemented.');
  }
}
