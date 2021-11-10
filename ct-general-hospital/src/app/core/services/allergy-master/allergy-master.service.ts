import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AllergyMaster,
  AllergyMasterIncomingDTO,
} from 'src/app/shared/models/allergymaster.model';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AllergyMasterService {
  constructor(
    private masterClient: HttpClient,
    private _snackBar: MatSnackBar
  ) {}
  getAllAllergy(desc: string) {
    return this.masterClient.get<AllergyMasterIncomingDTO>(
      `${environment.masterApiBaseUrl}GetAllergyMasters` 
    );
  }
  getAllAllergybyDesc(desc: string) {
    return this.masterClient.get<AllergyMasterIncomingDTO>(
      `${environment.masterApiBaseUrl}GetAllergyMastersByDescription?desc=` +
        desc
    );
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 2000,
    });
  }
  createAllergy(allergy: AllergyMaster) {
    this.masterClient
      .post(
        `${environment.masterApiBaseUrl}CreateNewAllergyMasterData`,
        allergy
      )
      .subscribe((res) => {
        this.openSnackBar('Allergy added!');
      });
  }
  updateAllergy(allergy: AllergyMaster) {
    this.masterClient
      .put(`${environment.masterApiBaseUrl}UpdateAllergyMasterData`, allergy)
      .subscribe((res) => {
        console.log(res);
        this.openSnackBar('Allergy updated!');
      });
  }
}
