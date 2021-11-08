import { Injectable } from '@angular/core';
import { VisitDetails } from 'src/app/shared/models/patient-visit-details.models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PatientVisitService {
  demographics: VisitDetails[] = [];

  // list of posts objects
  constructor(private http: HttpClient) {
    this.loadData();
  }
  loadData() {
    this.loadVisitDetails();
  }
  loadVisitDetails() {
    return this.http.get<VisitDetails[]>(
      'http://localhost:59523/api/Visit/GetAllVisits'
    );
  }

  addVisits(visit1: VisitDetails) {
    console.log('Visit details : ' + visit1.Reason);
    this.http
      .post('http://localhost:59523/api/Visit/AddVisit', visit1)
      .subscribe((res) => {
        console.log(res);
        this.loadData();
        console.log('data inserted success fully');
      });
  }
}
