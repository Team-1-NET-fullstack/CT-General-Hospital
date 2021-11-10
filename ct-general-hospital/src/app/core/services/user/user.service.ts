import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  public getAllUsers(userType: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${environment.appointmentSchedulerApiBaseUrl}getAllUsers?userType=${userType}`
    );
  }
}
