import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  DiagnosisMaster,
  DiagnosisMasterIncomingDTO,
} from 'src/app/shared/models/diagnosismaster.model';

@Injectable({
  providedIn: 'root',
})
export class DiagnosisMasterService {
  constructor(private masterClient: HttpClient) {}
  getAllDiagnosisbyDesc(desc: string) {
    return this.masterClient.get<DiagnosisMasterIncomingDTO>(
      'http://localhost:9001/api/DiagnosisMasters/GetDiagnosisByDescription?desc=' +
        desc
    );
  }

  createDiagnosis(diagnosis: DiagnosisMaster) {
    this.masterClient
      .post(
        'http://localhost:9001/api/DiagnosisMasters/CreateNewDiagnosis',
        diagnosis
      )
      .subscribe((res) => {
        console.log('data inserted successfully');
      });
  }
  updateDiagnosis(id: string, diagnosis: DiagnosisMaster) {
    this.masterClient
      .put(
        'http://localhost:9001/api/DiagnosisMasters/UpdateDiagnosis?id=' + id,
        diagnosis
      )
      .subscribe((res) => {
        console.log(res);
        console.log('data updated successfully');
      });
  }
}
