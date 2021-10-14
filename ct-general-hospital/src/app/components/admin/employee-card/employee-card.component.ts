import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.model';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  selected = 'option2';
  // Employee emp=new Employee({"101",});
  employees: Employee[] = [
    {
      id: 1,
      title: 'Ms.',
      name: 'Bhavya',
      dob: new Date('01-01-1990'),
      emailid: 'bhavya@cth.com',
      role: 'doctor',
      joining: new Date('01-12-2021'),
      status: 'Active',
    },
    {
      id: 2,
      title: 'Ms.',
      name: 'Aparna',
      dob: new Date('01-01-1991'),
      emailid: 'aparna@cth.com',
      role: 'nurse',
      joining: new Date('01-12-2021'),
      status: 'Active',
    },
    {
      id: 3,
      title: 'Ms.',
      name: 'Divya',
      dob: new Date('01-01-1990'),
      emailid: 'divya@cth.com',
      role: 'doctor',
      joining: new Date('01-12-2021'),
      status: 'Active',
    },
    {
      id: 4,
      title: 'Ms.',
      name: 'Kavya',
      dob: new Date('01-01-1990'),
      emailid: 'kavya@cth.com',
      role: 'nurse',
      joining: new Date('01-12-2021'),
      status: 'Active',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
