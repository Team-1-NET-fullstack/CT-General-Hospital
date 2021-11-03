import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MedicationMaster } from 'src/app/shared/models/medicationmaster.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationMasterService {

  constructor(private masterClient: HttpClient) { }
  getAllMedicationbyDesc(desc:string) {
    return this.masterClient.get<MedicationMaster[]>('http://localhost:9001/api/MedicationMasters/GetProcedureByMedication?desc='+desc);
  }
  createMedication(procedure: MedicationMaster) {
    
    this.masterClient
      .post('http://localhost:9001/api/MedicationMasters/CreateNewMedication', procedure)
      .subscribe((res) => {
        console.log(res);
      console.log('data inserted successfully');
      });
}
}
