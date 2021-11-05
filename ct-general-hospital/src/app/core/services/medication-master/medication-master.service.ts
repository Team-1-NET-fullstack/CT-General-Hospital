import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  MedicationMaster,
  MedicationMasterIncomingDTO,
} from 'src/app/shared/models/medicationmaster.model';

@Injectable({
  providedIn: 'root',
})
export class MedicationMasterService {
  constructor(private masterClient: HttpClient) {}
  getAllMedicationbyDesc(desc: string) {
    return this.masterClient.get<MedicationMasterIncomingDTO>(
      'http://localhost:9001/api/MedicationMasters/GetMedicationByDescription?desc=' +
        desc
    );
  }

  createMedication(medication: MedicationMaster) {
    this.masterClient
      .post(
        'http://localhost:9001/api/MedicationMasters/CreateNewMedication',
        medication
      )
      .subscribe((res) => {
        console.log('data inserted successfully');
      });
  }
  updateMedication(id: string, medication: MedicationMaster) {
    this.masterClient
      .put(
        'http://localhost:9001/api/MedicationMasters/UpdateMedication?id=' + id,
        medication
      )
      .subscribe((res) => {
        console.log(res);
        console.log('data updated successfully');
      });
  }
}
