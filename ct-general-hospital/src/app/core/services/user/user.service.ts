import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { UserModel } from "src/app/shared/models/UserModel.model";
import { environment } from "src/environments/environment";
//import { UserModel } from "../model/user.model";


@Injectable()
export class UserService {
    UserId: any | null = null;
    constructor(private router: Router,private http: HttpClient) 
    {
        this.UserId = localStorage.getItem("USERID");
        console.log("hhhh"+this.UserId);
     }

    // register(user: UserModel) {
    //     //return this.http.post(`${config.apiUrl}/users/register`, user);
    // }

    // delete(id: number) {
    //     //return this.http.delete(`${config.apiUrl}/users/${id}`);
    // }
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
    // AcivateUser(model:any) {      
    //     return this.http.post(environment.userManagementApiBaseUrl + "/api/User/ActivateUser",model)
    // }
    // BlockUser(model:any) {          
    //     return this.http.post(environment.userManagementApiBaseUrl + "/api/User/BlockUser",model);
    // }
}