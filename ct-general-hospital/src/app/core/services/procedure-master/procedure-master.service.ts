import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProcedureMaster, ProcedureMasterIncomingDTO } from 'src/app/shared/models/proceduremaster.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProcedureMasterService {

  constructor(private masterClient: HttpClient,private _snackBar:MatSnackBar) {}
  getAllProcedurebyDesc(desc: string) {
    return this.masterClient.get<ProcedureMasterIncomingDTO>(
      `${environment.masterApiBaseUrl}GetProcedureMastersByDescription?desc=` +
        desc
    );
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 2000,
    });
  }
  createProcedure(procedure: ProcedureMaster) {
    this.masterClient
      .post(
        `${environment.masterApiBaseUrl}CreateNewProcedureMastersData`,
        procedure
      )
      .subscribe((res) => {
        this.openSnackBar('Procedure added!');
      });
  }
  
  updateProcedure(procedure: ProcedureMaster) {
    this.masterClient
      .put(`${environment.masterApiBaseUrl}UpdateProcedureMastersData`,procedure)
      .subscribe((res) => {
        console.log(res);
        this.openSnackBar('Procedure updated!');
      });
  }
}
