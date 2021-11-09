import { Component, OnInit, ViewChild } from '@angular/core';
import { EditEmployeeService } from 'src/app/core/services/edit-employee/edit-employee.service';
import { EditEmployee } from 'src/app/shared/models/edit-employee.model';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/shared/models/UserModel.model';
import { MatSort } from '@angular/material/sort';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent implements OnInit {
  @ViewChild('TablePaginator', { static: true })
  tablePaginator!: MatPaginator;
  @ViewChild('TableSort', { static: true }) tableSort!: MatSort;
  dataSource: MatTableDataSource<UserModel>;
  roleId: any | null = null;

  newHospitalUsers:any;
  
  displayColumns: string[] = [
    'employeeId',
    'firstName',
    'lastName',
    'email',
    'role',
    'status'
  ];

  


  constructor(private userService: UserService,
    private SpinnerService: NgxSpinnerService) {
    this.dataSource = new MatTableDataSource();
    this.roleId = localStorage.getItem('ROLEID');
    
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.SpinnerService.hide();
  }
  
  getAllUsers() {
    this.SpinnerService.show();
    this.userService.getAllHospitalUsers().subscribe((model: any) => {
      this.SpinnerService.hide();
      this.dataSource.data = model;
      this.dataSource.sort = this.tableSort;
      this.dataSource.paginator = this.tablePaginator;
      });
   
  }
}
