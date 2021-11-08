import { Injectable } from '@angular/core';
import { DemographicsDetails } from 'src/app/shared/models/patient-demographics.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PatientDemographicsService {
  demographics: DemographicsDetails[] = [];

  // list of posts objects
  constructor(private http: HttpClient) {
    this.loadData();
  }
  loadData() {
    this.loadDemographicsDetails();
  }
  loadDemographicsDetails() {
    return this.http.get<DemographicsDetails[]>(
      'http://localhost:59523/api/Patients/GetAllPatients'
    );
  }

  addDemographics(demographics1: DemographicsDetails) {
    console.log('Demographics details : ' + demographics1.firstName);
    this.http
      .post('http://localhost:59523/api/Patients/GetPatientById', demographics1)
      .subscribe((res) => {
        console.log(res);
        this.loadData();
        //  console.log('data inserted success fully');
      });
  }

  GetDemographics(id: number): Observable<any> {
    const params = {
      id,
    };
    console.log('Demographics details : ');
    return this.http.get('http://localhost:59523/api/Patients/GetPatientById', {
      params,
    });
    //http://localhost:59523/api/Patients/GetPatientById?id=4

    // .subscribe((res) => {
    // console.log(res);
    //this.loadData();
    //return res;
    //console.log('data fetched successfully');

    //    return "";
  }
}
