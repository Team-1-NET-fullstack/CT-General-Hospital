import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcedureMaster, ProcedureMasterIncomingDTO } from 'src/app/shared/models/proceduremaster.model';

@Injectable({
  providedIn: 'root',
})
export class ProcedureMasterService {

  constructor(private masterClient: HttpClient) {}
  getAllProcedurebyDesc(desc: string) {
    return this.masterClient.get<ProcedureMasterIncomingDTO>(
      'http://localhost:9001/api/ProcedureMasters/GetProcedureByDescription?desc=' +
        desc
    );
  }

  createProcedure(procedure: ProcedureMaster) {
    this.masterClient
      .post(
        'http://localhost:9001/api/ProcedureMasters/CreateNewProcedure',
        procedure
      )
      .subscribe((res) => {
        console.log('data inserted successfully');
      });
  }
  updateProcedure(id: string, procedure: ProcedureMaster) {
    this.masterClient
      .put(
        'http://localhost:9001/api/ProcedureMasters/UpdateProcedure?id=' + id,
        procedure
      )
      .subscribe((res) => {
        console.log(res);
        console.log('data updated successfully');
      });
  }
}
