import { Injectable } from '@angular/core';
import { DemographicsDetails } from 'src/app/shared/models/patient-demographics.model';
import { HttpClient } from '@angular/common/http';
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
    this.http
      .get<DemographicsDetails[]>('http://localhost:3000/DemographicsDetails')
      .subscribe((demographicsDetails) => {
        this.demographics.splice(0, this.demographics.length); // Clear array
        this.demographics.push(...demographicsDetails); // add new element
        console.log(demographicsDetails);
      });
  }

  addDemographics(demographics1: DemographicsDetails) {
    this.http
      .post('http://localhost:3000/DemographicsDetails', demographics1)
      .subscribe((res) => {
        console.log(res);
        this.loadData();
        console.log('data inserted success fully');
      });
  }


  
}
