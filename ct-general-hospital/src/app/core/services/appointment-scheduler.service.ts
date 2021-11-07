import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Appointments } from 'src/app/shared/models/appointments.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentSchedulerService {
  constructor(private http: HttpClient) {}

  getAllAppointments() {
    return this.http.get<Appointments[]>(
      `${environment.appointmentSchedulerApiBaseUrl}GetAllAppointments`
    );
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
}
