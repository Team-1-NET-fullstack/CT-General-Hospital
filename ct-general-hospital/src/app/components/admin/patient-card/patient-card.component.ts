import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { EditPatientService } from 'src/app/core/services/edit-patient/edit-patient.service';
import { EditPatient } from 'src/app/shared/models/edit-patient.model';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css'],
})
export class PatientCardComponent implements OnInit {
  patient: EditPatient[] = [];
  

  constructor(private editPatientService: EditPatientService) {

    this.editPatientService.getAllPatient().subscribe(
      (patients) => {
        // this.patients = patient;
        this.patient.splice(0,this.patient.length); //clear array
        this.patient.push(...patients); //add new element
      }
    );
  }
  OnSearch(){
    
  }
  ngOnInit(): void {}
}
