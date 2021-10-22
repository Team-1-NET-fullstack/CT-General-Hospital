import { Component, OnInit } from '@angular/core';
import { EditEmployeeService } from 'src/app/core/services/edit-employee/edit-employee.service';
import { EditEmployee } from 'src/app/shared/models/edit-employee.model';

import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {

  
  employee: EditEmployee[] = [];
  openDialog() {
    const dialogRef = this.dialog.open(EditEmployeeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  constructor(private editEmployeeservice: EditEmployeeService, public dialog:MatDialog) {

    this.editEmployeeservice.getAllEmployees().subscribe(
      (employees) => {
        // this.employee = employees;
        this.employee.splice(0,this.employee.length); //clear array
        this.employee.push(...employees); //add new element
      }
    );
  }

  ngOnInit(): void {}
}
