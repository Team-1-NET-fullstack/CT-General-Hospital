import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  createAllergy(allergy: AllergyMaster) {
    this.masterClient
      .post(
        'http://localhost:9001/api/AllergyMasters/CreateNewAllergy',
        allergy
      )
      .subscribe((res) => {
        console.log('data inserted successfully');
      });
  }
  updateAllergy(id:string, allergy: AllergyMaster) {
    this.masterClient
      .put('http://localhost:9001/api/AllergyMasters/UpdateAllergy?id=' +id,allergy)
      .subscribe((res) => {
        console.log(res);
        console.log('data updated successfully');
      });
  }
}
