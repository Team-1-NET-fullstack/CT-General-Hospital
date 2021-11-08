import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DiagnosisMaster,
  DiagnosisMasterIncomingDTO,
} from 'src/app/shared/models/diagnosismaster.model';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class DiagnosisMasterService {
  constructor(private masterClient: HttpClient) {}
  getAllDiagnosisbyDesc(desc: string) {
    return this.masterClient.get<DiagnosisMasterIncomingDTO>(
      `${environment.diagnosisApiBaseUrl}GetDiagnosisByDescription?desc=` +
        desc
    );
  }

  createDiagnosis(diagnosis: DiagnosisMaster) {
    this.masterClient
      .post(
        `${environment.diagnosisApiBaseUrl}CreateNewDiagnosis`,
        diagnosis
      )
      .subscribe((res) => {
        console.log('data inserted successfully');
      });
  }
  updateDiagnosis(diagnosis: DiagnosisMaster) {
    this.masterClient
      .put(`${environment.diagnosisApiBaseUrl}UpdateDiagnosis`,diagnosis)
      .subscribe((res) => {
        console.log(res);
        console.log('data updated successfully');
      });
  }
}
