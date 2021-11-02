import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProcedureMaster } from 'src/app/shared/models/proceduremaster.model';

@Injectable({
  providedIn: 'root',
})
export class ProcedureMasterService {

  constructor(private masterClient: HttpClient) { }
  getAllProcedurebyDesc(desc:string) {
    return this.masterClient.get<ProcedureMaster[]>('http://localhost:41832/api/ProcedureMasters/GetProcedureByDescription?desc='+desc);
  }
  createProcedure(procedure: ProcedureMaster) {
    
    this.masterClient
      .post('http://localhost:41832/api/ProcedureMasters/CreateNewProcedure', procedure)
      .subscribe((res) => {
        console.log(res);
      console.log('data inserted successfully');
      });
}
}
