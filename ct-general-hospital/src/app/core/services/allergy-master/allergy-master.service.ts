import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AllergyMaster,
  AllergyMasterIncomingDTO,
} from 'src/app/shared/models/allergymaster.model';

@Injectable({
  providedIn: 'root',
})
export class AllergyMasterService {
  constructor(private masterClient: HttpClient) {}
  getAllAllergybyDesc(desc: string) {
    return this.masterClient.get<AllergyMasterIncomingDTO>(
      'http://localhost:9001/api/AllergyMasters/GetAllergyByDescription?desc=' +
        desc
    );
  }

   getAllergyById (patientId:number):Observable<any>
  {
   return this.masterClient.get('http://localhost:59523/api/Allergies/'+patientId);
   
  }
  createAllergy(allergy: AllergyMaster) {
    this.masterClient
      .post(
        'http://localhost:59523/api/Allergies', allergy)
      .subscribe((res) => {
        console.log('data inserted successfully');
      });
  }
  updateAllergy(allergy: AllergyMaster) {
    this.masterClient
      .put('http://localhost:9001/api/AllergyMasters/UpdateAllergy',allergy)
      .subscribe((res) => {
        console.log(res);
        console.log('data updated successfully');
      });
  }
}
