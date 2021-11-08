import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AllergyMaster,
  AllergyMasterIncomingDTO,
} from 'src/app/shared/models/allergymaster.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AllergyMasterService {
  constructor(private masterClient: HttpClient) {}
  getAllAllergybyDesc(desc: string) {
    return this.masterClient.get<AllergyMasterIncomingDTO>(
      `${environment.allergyApiBaseUrl}GetAllergyByDescription?desc=` +
        desc
        
    );
  }

  createAllergy(allergy: AllergyMaster) {
    this.masterClient
      .post(
        `${environment.allergyApiBaseUrl}CreateNewAllergy`,
        allergy
      )
      .subscribe((res) => {
        console.log('data inserted successfully');
      });
  }
  updateAllergy(allergy: AllergyMaster) {
    this.masterClient
      .put(`${environment.allergyApiBaseUrl}UpdateAllergy`,allergy)
      .subscribe((res) => {
        console.log(res);
        console.log('data updated successfully');
      });
  }
}
