import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EditPatient } from 'src/app/shared/models/edit-patient.model';

@Injectable({
  providedIn: 'root',
})
export class EditPatientService {
  constructor(private patientClient: HttpClient) {}

  getAllPatient() {
    return this.patientClient.get<EditPatient[]>('http://localhost:3000/Patient');
  }
}
