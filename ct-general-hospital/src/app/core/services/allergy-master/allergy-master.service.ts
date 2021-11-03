import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllergyMaster } from 'src/app/shared/models/allergymaster.model';

@Injectable({
  providedIn: 'root'
})
export class AllergyMasterService {

  constructor(private masterClient: HttpClient) { }
  getAllAllergybyDesc(desc:string) {
    return this.masterClient.get<AllergyMaster[]>('http://localhost:9001/api/AllergyMasters/GetAllergyByDescription?desc='+desc);
  }
  createAllergy(allergy: AllergyMaster) {
    
    this.masterClient
      .post('http://localhost:9001/api/AllergyMasters/CreateNewAllergy', allergy)
      .subscribe((res) => {
        console.log(res);
      console.log('data inserted successfully');
      });}
}
