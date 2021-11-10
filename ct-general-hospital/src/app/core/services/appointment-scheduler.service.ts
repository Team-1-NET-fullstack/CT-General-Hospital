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
  user!: number;
  userId!: number;
  constructor(private http: HttpClient, private auth: AuthService) {
    this.userId != this.auth.user.value?.userId;
  }

  getAllAppointments() {
    return this.http.get<Appointment[]>(
      `${environment.masterApiBaseUrl}GetAllTheAppointments`
    );
  }

  public GetAllAvailablePhysicians(
    startDate: Date
  ): Observable<AppointmentInfo[]> {
    return this.http
      .get<AppointmentInfo[]>(
        `${environment.masterApiBaseUrl}getAllTheAvailablePhysician?startDate=${startDate}`
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  createAppointment(newAppointment: any) {
    return this.http.post(
      `${environment.masterApiBaseUrl}CreateNewAppointments`,
      newAppointment
    );
  }

  public updateAppointment(appointmentDetails: any) {
    return this.http
      .put(
        `${environment.masterApiBaseUrl}UpdateExistingAppointment`,
        appointmentDetails
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  public UpdateAppointmentStatus(appointmentDetails: any) {
    return this.http
      .put(
        `${environment.masterApiBaseUrl}UpdateTheAppointmentStatus`,
        appointmentDetails
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  public deleteAppointment(appointmentId: any) {
    return this.http
      .delete(
        `${environment.masterApiBaseUrl}DeleteAllApointment/${appointmentId}`
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }
}
