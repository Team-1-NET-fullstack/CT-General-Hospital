import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(roleId: any) {
    return this.http.get<User[]>(
      `${environment.appointmentSchedulerApiBaseUrl}GetAllUsers`,
      roleId
    );
  }
}
