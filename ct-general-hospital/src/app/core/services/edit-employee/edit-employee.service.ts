import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditEmployee } from 'src/app/shared/models/edit-employee.model';

@Injectable({
  providedIn: 'root',
})
export class EditEmployeeService {
  constructor(private client: HttpClient) {}

  getAllEmployees() {
    return this.client.get<EditEmployee[]>('http://localhost:3000/Employee');
  }
}
