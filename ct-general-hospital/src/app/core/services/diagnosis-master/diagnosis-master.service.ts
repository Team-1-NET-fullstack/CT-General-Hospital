import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DiagnosisMaster } from 'src/app/shared/models/diagnosismaster.model';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisMasterService {

  constructor(private masterClient: HttpClient) { }
  getAllDiagnosisbyDesc(desc:string) {
    return this.masterClient.get<DiagnosisMaster[]>('http://localhost:9001/api/DiagnosisMasters/GetDiagnosisByDescription?desc='+desc);
  }
  createDiagnosis(diagnosis: DiagnosisMaster) {
    
    this.masterClient
      .post('http://localhost:9001/api/DiagnosisMasters/CreateNewDiagnosis', diagnosis)
      .subscribe((res) => {
        console.log(res);
      console.log('data inserted successfully');
      });
}
}