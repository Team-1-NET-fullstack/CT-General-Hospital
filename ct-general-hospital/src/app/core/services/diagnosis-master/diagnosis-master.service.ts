import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  DiagnosisMaster,
  DiagnosisMasterIncomingDTO,
} from 'src/app/shared/models/diagnosismaster.model';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class DiagnosisMasterService {
  constructor(private masterClient: HttpClient,private _snackBar: MatSnackBar) {}
  getAllDiagnosisbyDesc(desc: string) {
    return this.masterClient.get<DiagnosisMasterIncomingDTO>(
      `${environment.diagnosisApiBaseUrl}GetDiagnosisByDescription?desc=` +
        desc
    );
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 2000,
    });
  }
  createDiagnosis(diagnosis: DiagnosisMaster) {
    this.masterClient
      .post(
        `${environment.diagnosisApiBaseUrl}CreateNewDiagnosis`,
        diagnosis
      )
      .subscribe((res) => {
        this.openSnackBar('Diagnosis added!');
      });
  }
  updateDiagnosis(diagnosis: DiagnosisMaster) {
    this.masterClient
      .put(`${environment.diagnosisApiBaseUrl}UpdateDiagnosis`,diagnosis)
      .subscribe((res) => {
        console.log(res);
        this.openSnackBar('Diagnosis updated!');
      });
  }
}
