import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from '../alert.service';
import { AuthService } from '../core/services/auth.service';
import { UserService } from '../core/services/user/user.service';
import { UserModel } from '../shared/models/UserModel.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup = new FormGroup({});
  dataModel: UserModel | null = null;
  loading = false;
  submitted = false;
  roles: any = [];
  tomorrow = new Date();
  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
     private SpinnerService: NgxSpinnerService,
    private authenticationService: AuthService) {
    //console.log(this.data);
    this.editForm = this.formBuilder.group({
      employeeId: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.pattern("[A-Z]{2}[0-9]{5}")]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      phone: new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      dob: new FormControl({ value: '', disabled: true }, [Validators.required]),
      email: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.email]),
      roleId: new FormControl(null, [Validators.required]),
    });
    //this.editForm=this.data;
    this.getAllRoles();
    this.SpinnerService.hide();
  }

  ngOnInit(): void {

  }
  get f() {
    return this.editForm.controls;
  }
  getAllRoles() {
    this.SpinnerService.show();
    this.authenticationService.getAllRoles().subscribe((roles: any) => {
      this.roles = roles;
      this.SpinnerService.hide();
    });
  }
  onSave(): void {
    //console.log(this.editForm.value);
    this.SpinnerService.show();
    this.submitted = true;
    if (this.editForm.invalid) {
      this.alertService.success("The form contains one or more missing values!", true);
      this.SpinnerService.hide();
      return;
    }
    this.dataModel = new UserModel(
      // this.data.userId,
      // this.editForm.value.employeeId,
      // this.editForm.value.firstName,
      // this.editForm.value.lastName,
      // this.editForm.value.phone,
      // this.editForm.value.dob,
      // this.editForm.value.email,
      // this.editForm.value.roleId

      this.data.title,
      this.editForm.value.firstName,
      this.editForm.value.lastName,
      this.data.email,
      this.data.password,
      this.editForm.value.phone,
      this.data.dob,
      this.data.roleId,
      this.data.employeeId,
      this.data.status,
      this.data.noOfWrongAttempts,
      this.data.createdDate,
      this.data.userId,
      this.data.role,
    );
    this.userService.updateUser(this.dataModel).subscribe(
      (data: any) => {
        if (data.isSuccess === true) {
          console.log(data.firstName);
          this.alertService.success(data.message, true);
          this.SpinnerService.hide();
        }
        else {
          this.alertService.success(data.message, true);
          this.SpinnerService.hide();
        }
      },
      (error) => {
        this.alertService.error(error);
        this.loading = false;
        this.SpinnerService.hide();
      }
    );
    this.dialogRef.close(this.editForm.value);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
