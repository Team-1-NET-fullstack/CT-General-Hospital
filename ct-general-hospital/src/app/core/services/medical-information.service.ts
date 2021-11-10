import { Injectable } from '@angular/core';
import { VitalSigns } from 'src/app/shared/models/vital-signs.model';
import { DiagnosisDetails } from 'src/app/shared/models/diagnosis-details.model';
import { ProcedureDetails } from 'src/app/shared/models/procedure-details.model';
import { MedicationDetails } from 'src/app/shared/models/medication-details.model';
import { HttpClient } from '@angular/common/http';
import { PatientDetails } from 'src/app/shared/models/patient-details.model';
@Injectable({
  providedIn: 'root',
})
export class MedicalInformationService {
  vitalSigns: VitalSigns[] = [];
  diagnosisDetails: DiagnosisDetails[] = [];
  procedureDetails: ProcedureDetails[] = [];
  medicationDetails: MedicationDetails[] = [];
  patientDetails: PatientDetails[] = [];
  constructor(private http: HttpClient) {
    this.loadData();
  }
  loadData() {
    this.loadVitalSigns();
    this.loadDiagnosisDetails();
    this.loadProcedureDetails();
    this.loadMedicationDetails();
    this.loadPatientDetails();
  }
  loadVitalSigns() {
    this.http
      .get<VitalSigns[]>('http://localhost:3000/VitalSigns')
      .subscribe((vitalSigns) => {
        this.vitalSigns.splice(0, this.vitalSigns.length);
        this.vitalSigns.push(...vitalSigns);
      });
  }
  loadDiagnosisDetails() {
    this.http
      .get<DiagnosisDetails[]>('http://localhost:3000/DiagnosisDetails')
      .subscribe((diagnosisDetails) => {
        this.diagnosisDetails.splice(0, this.diagnosisDetails.length);
        this.diagnosisDetails.push(...diagnosisDetails);
      });
  }
  loadProcedureDetails() {
    this.http
      .get<ProcedureDetails[]>('http://localhost:3000/ProcedureDetails')
      .subscribe((procedureDetails) => {
        this.procedureDetails.splice(0, this.procedureDetails.length);
        this.procedureDetails.push(...procedureDetails);
      });
  }
  loadMedicationDetails() {
    this.http
      .get<MedicationDetails[]>('http://localhost:3000/MedicationDetails')
      .subscribe((medicationDetails) => {
        this.medicationDetails.splice(0, this.medicationDetails.length);
        this.medicationDetails.push(...medicationDetails);
      });
  }
  loadPatientDetails() {
    this.http
      .get<PatientDetails[]>('http://localhost:3000/PatientDetails')
      .subscribe((patientDetails) => {
        this.patientDetails.splice(0, this.patientDetails.length);
        this.patientDetails.push(...patientDetails);
      });
  }
  addVitals(vitalSigns: VitalSigns) {
    this.http
      .post('http://localhost:3000/VitalSigns', vitalSigns)
      .subscribe((res) => {
        this.loadData();
      });
  }
  addDiagnosisDetails(listOfObjects: Object) {
    this.http
      .post('http://localhost:3000/DiagnosisDetails', listOfObjects)
      .subscribe((res) => {
        this.loadData();
      });
  }
  addProcedureDetails(procedureDetails: ProcedureDetails) {
    this.http
      .post('http://localhost:3000/ProcedureDetails', procedureDetails)
      .subscribe((res) => {
        this.loadData();
      });
  }
  addMedicationDetails(medicationDetails: MedicationDetails) {
    this.http
      .post('http://localhost:3000/MedicationDetails', medicationDetails)
      .subscribe((res) => {
        this.loadData();
      });
  }
  addPatientDetails(patientDetails: PatientDetails) {
    this.http
      .post('http://localhost:3000/PatientDetails', patientDetails)
      .subscribe((res) => {
        this.loadData();
      });
  }
}
