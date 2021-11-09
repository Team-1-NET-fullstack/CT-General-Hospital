import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MedicationMaster,
  MedicationMasterIncomingDTO,
} from 'src/app/shared/models/medicationmaster.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MedicationMasterService {
  constructor(private masterClient: HttpClient,private _snackBar: MatSnackBar) {}
  getAllMedicationbyDesc(desc: string) {
    return this.masterClient.get<MedicationMasterIncomingDTO>(
      `${environment.medicationApiBaseUrl}GetMedicationByDescription?desc=` +
        desc
    );
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 2000,
    });
  }
  createMedication(medication: MedicationMaster) {
    this.masterClient
      .post(
        `${environment.medicationApiBaseUrl}CreateNewMedication`,
        medication
      )
      .subscribe((res) => {
        this.openSnackBar('Medication added!');
      });
  }
  updateMedication(medication: MedicationMaster) {
    console.log(medication);
    this.masterClient
      .put(`${environment.medicationApiBaseUrl}UpdateMedication`,medication)
      .subscribe((res) => {
        console.log(res);
        this.openSnackBar('Medication updated!');
      });
  }
}
