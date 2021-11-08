import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  MedicationMaster,
  MedicationMasterIncomingDTO,
} from 'src/app/shared/models/medicationmaster.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MedicationMasterService {
  constructor(private masterClient: HttpClient) {}
  getAllMedicationbyDesc(desc: string) {
    return this.masterClient.get<MedicationMasterIncomingDTO>(
      `${environment.medicationApiBaseUrl}GetMedicationByDescription?desc=` +
        desc
    );
  }

  createMedication(medication: MedicationMaster) {
    this.masterClient
      .post(
        `${environment.medicationApiBaseUrl}CreateNewMedication`,
        medication
      )
      .subscribe((res) => {
        console.log('data inserted successfully');
      });
  }
  updateMedication(medication: MedicationMaster) {
    console.log(medication);
    this.masterClient
      .put(`${environment.medicationApiBaseUrl}UpdateMedication`,medication)
      .subscribe((res) => {
        console.log(res);
        console.log('data updated successfully');
      });
  }
}
