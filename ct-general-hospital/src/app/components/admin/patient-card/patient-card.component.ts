import { Component, OnInit } from '@angular/core';
import { Patient } from './../../../core/models/patient.model';

@Component({
  selector: 'app-patient-card',
  templateUrl: './patient-card.component.html',
  styleUrls: ['./patient-card.component.css']
})
export class PatientCardComponent implements OnInit {
  selected = 'option2';
  constructor() { }
 
  patients : Patient[]=[{
    "id": 1,
    "title": "Ms.",
    "name": "Bhavya",
    "dob": new Date("01-01-1990"),
    "emailid": "bhavya@gmail.com",
    "registeration": new Date("01-12-2021"),
    "status": "Active"
  },
  {
    "id": 1,
    "title": "Ms.",
    "name": "Rachel",
    "dob": new Date("01-01-1990"),
    "emailid": "rachel@hotmail.com",
    "registeration": new Date("01-12-2021"),
    "status": "Active"
  },
  {
    "id": 1,
    "title": "Mr.",
    "name": "Ross",
    "dob": new Date("01-01-1990"),
    "emailid": "ross@rediff.com",
    "registeration": new Date("01-12-2021"),
    "status": "Active"
  },
  {
    "id": 1,
    "title": "Ms.",
    "name": "Monica",
    "dob": new Date("01-01-1990"),
    "emailid": "monica@outlook.com",
    "registeration": new Date("01-12-2021"),
    "status": "Active"
  },
  {
    "id": 1,
    "title": "Ms.",
    "name": "Bhavya",
    "dob": new Date("01-01-1990"),
    "emailid": "bhavya@cth.com",
    "registeration": new Date("01-12-2021"),
    "status": "Active"
  }
]

  
  ngOnInit(): void {
  }

}
