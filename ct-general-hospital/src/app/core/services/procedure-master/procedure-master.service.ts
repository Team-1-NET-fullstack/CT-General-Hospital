import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcedureMaster, ProcedureMasterIncomingDTO } from 'src/app/shared/models/proceduremaster.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProcedureMasterService {

  constructor(private masterClient: HttpClient) {}
  getAllProcedurebyDesc(desc: string) {
    return this.masterClient.get<ProcedureMasterIncomingDTO>(
      `${environment.procedureApiBaseUrl}GetProcedureByDescription?desc=` +
        desc
    );
  }

  createProcedure(procedure: ProcedureMaster) {
    this.masterClient
      .post(
        `${environment.procedureApiBaseUrl}CreateNewProcedure`,
        procedure
      )
      .subscribe((res) => {
        console.log('data inserted successfully');
      });
  }
  
  updateProcedure(procedure: ProcedureMaster) {
    this.masterClient
      .put(`${environment.procedureApiBaseUrl}UpdateProcedure`,procedure)
      .subscribe((res) => {
        console.log(res);
        console.log('data updated successfully');
      });
  }
}
