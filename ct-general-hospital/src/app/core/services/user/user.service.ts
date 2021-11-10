import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/User.model';
import { UserModel } from 'src/app/shared/models/UserModel.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  UserId: any | null = null;
  constructor(private http: HttpClient) { this.UserId = localStorage.getItem("USERID");}
  registerUser(user: UserModel) {
    return this.http.post(environment.userManagementApiBaseUrl + "/api/User/RegisterUser", user);
}

updateUser(user: UserModel) {
    return this.http.post(environment.userManagementApiBaseUrl + "/api/User/UpdateUser", user);
}
getAllHospitalUsers() {
    return this.http.get(environment.userManagementApiBaseUrl + "/api/User/GetAllHospitalUsers");
}
getUser(){
  let user=this.UserId;
  console.log(user);
    return this.http.get(environment.userManagementApiBaseUrl+`/api/User/GetUser?userId=${user}`);
}
  getAllUsers(roleId: any) {
    return this.http.get<User[]>(
      `${environment.appointmentSchedulerApiBaseUrl}GetAllUsers`,
      roleId
    );
  }
}
