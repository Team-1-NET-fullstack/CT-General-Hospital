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
  constructor(private masterClient: HttpClient,private _snackBar: MatSnackBar) {}
  getAllAllergybyDesc(desc: string) {
    return this.masterClient.get<AllergyMasterIncomingDTO>(
      `${environment.allergyApiBaseUrl}GetAllergyByDescription?desc=` +
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
        `${environment.allergyApiBaseUrl}CreateNewAllergy`,
        allergy
      )
      .subscribe((res) => {
        this.openSnackBar('Allergy added!');
      });
  }
  updateAllergy(allergy: AllergyMaster) {
    this.masterClient
      .put(`${environment.allergyApiBaseUrl}UpdateAllergy`,allergy)
      .subscribe((res) => {
        console.log(res);
        this.openSnackBar('Allergy updated!');
      });
  }
}
