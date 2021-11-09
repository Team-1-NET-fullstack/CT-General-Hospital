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
  // list of posts objects
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
      .get<VitalSigns[]>('http://localhost:59523/api/PatientVitals')
      .subscribe((vitalSigns) => {
        this.vitalSigns.splice(0, this.vitalSigns.length); // Clear array
        this.vitalSigns.push(...vitalSigns); // add new element
        // console.log(vitalSigns);
      });
  }
  loadDiagnosisDetails() {
    this.http
      .get<DiagnosisDetails[]>('http://localhost:3000/DiagnosisDetails')
      .subscribe((diagnosisDetails) => {
        this.diagnosisDetails.splice(0, this.diagnosisDetails.length); // Clear array
        this.diagnosisDetails.push(...diagnosisDetails); // add new element
        // console.log(diagnosisDetails);
      });
  }
  loadProcedureDetails() {
    this.http
      .get<ProcedureDetails[]>('http://localhost:3000/ProcedureDetails')
      .subscribe((procedureDetails) => {
        this.procedureDetails.splice(0, this.procedureDetails.length); // Clear array
        this.procedureDetails.push(...procedureDetails); // add new element
        // console.log(procedureDetails);
      });
  }
  loadMedicationDetails() {
    this.http
      .get<MedicationDetails[]>('http://localhost:3000/MedicationDetails')
      .subscribe((medicationDetails) => {
        this.medicationDetails.splice(0, this.medicationDetails.length); // Clear array
        this.medicationDetails.push(...medicationDetails); // add new element
        // console.log(medicationDetails);
      });
  }
  loadPatientDetails() {
    this.http
      .get<PatientDetails[]>('http://localhost:3000/PatientDetails')
      .subscribe((patientDetails) => {
        this.patientDetails.splice(0, this.patientDetails.length); // Clear array
        this.patientDetails.push(...patientDetails); // add new element
        // console.log(patientDetails);
      });
  }
  addVitals(vitalSigns: VitalSigns) {
    this.http
      .post('http://localhost:59523/api/PatientVitals', vitalSigns)
      .subscribe((res) => {
        // console.log(res);
        this.loadData();
        console.log('data inserted success fully');
      });
  }
  addDiagnosisDetails(listOfObjects: Object) {
    this.http
      .post('http://localhost:59523/api/PatientVisits', listOfObjects)
      .subscribe((res) => {
        console.log(res);
        this.loadData();
        // console.log("data inserted success fully");
      });
  }
  addProcedureDetails(procedureDetails: ProcedureDetails) {
    this.http
      .post('http://localhost:59523/api/PatientVisits', procedureDetails)
      .subscribe((res) => {
        // console.log(res);
        this.loadData();
        // console.log("data inserted success fully");
      });
  }
  addMedicationDetails(medicationDetails: MedicationDetails) {
    this.http
      .post('http://localhost:59523/api/PatientVisits', medicationDetails)
      .subscribe((res) => {
        // console.log(res);
        this.loadData();
        // console.log("data inserted success fully");
      });
  }
  addPatientDetails(patientDetails: PatientDetails) {
    this.http
      .post('http://localhost:59523/api/Patients/AddPatient', patientDetails)
      .subscribe((res) => {
        // console.log(res);
        this.loadData();
        // console.log("data inserted success fully");
      });
  }
}
