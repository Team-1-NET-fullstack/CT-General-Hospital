import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllergyMaster } from 'src/app/shared/models/allergymaster.model';
import { DiagnosisMaster } from 'src/app/shared/models/diagnosismaster.model';
import { MedicationMaster } from 'src/app/shared/models/medicationmaster.model';
import { ProcedureMaster } from 'src/app/shared/models/proceduremaster.model';

@Injectable({
  providedIn: 'root',
})
export class MasterDataService {
  constructor(private masterClient: HttpClient) {}

  getAllProcedure() {
    return this.masterClient.get<ProcedureMaster[]>('http://localhost:9001/Patient');
  }
  getAllAllergy() {
    return this.masterClient.get<AllergyMaster[]>('http://localhost:9001/Patient');
  }
  getAllDiagnosis() {
    return this.masterClient.get<DiagnosisMaster[]>('http://localhost:9001/Patient');
  }
  getAllMedication() {
    return this.masterClient.get<MedicationMaster[]>('http://localhost:9001/Patient');
  }

  getAllProcedurebyId() {
    return this.masterClient.get<ProcedureMaster[]>('http://localhost:9001/Patient');
  }
  getAllAllergybyId() {
    return this.masterClient.get<AllergyMaster[]>('http://localhost:9001/Patient');
  }
  getAllDiagnosisbyId() {
    return this.masterClient.get<DiagnosisMaster[]>('http://localhost:9001/Patient');
  }
  getAllMedicationbyId() {
    return this.masterClient.get<MedicationMaster[]>('http://localhost:9001/Patient');
  }

  getAllProcedurebyDesc() {
    return this.masterClient.get<ProcedureMaster[]>('http://localhost:9001/Patient');
  }
  getAllAllergybyDesc() {
    return this.masterClient.get<AllergyMaster[]>('http://localhost:9001/Patient');
  }
  getAllDiagnosisbyDesc() {
    return this.masterClient.get<DiagnosisMaster[]>('http://localhost:9001/Patient');
  }
  getAllMedicationbyDesc() {
    return this.masterClient.get<MedicationMaster[]>('http://localhost:9001/Patient');
  }
}
