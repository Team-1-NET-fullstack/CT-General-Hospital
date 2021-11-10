import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { UserModel } from '../../models/UserModel.model';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
 
  UserId: any | null = null;
  firstName1:any | null = null;
  lastName:any | null = null;
  email:any | null = null;
  phone:any | null = null;
  editForm: FormGroup = new FormGroup({});
  dataModel: UserModel | null = null;
  loading = false;
  submitted = false;
  roles: any = [];
  user:any=[];
  tomorrow = new Date();
  xFirstName:string='';
  dummyObj: any;
  xTitle: string='';
  xLastName:string='';
  xEmail: string='';
  xphone: any;
  xPassword: any;
  xDob: any;
  xRoleId: any;
  xUserId: any;
  xEmployeeId: any;
  xStatus: any;
  xCreatedDate: any;
  xNoOfWrongAttempts: any;
  xRole: any;
  constructor(
    public dialogRef: MatDialogRef<MyAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
     private SpinnerService: NgxSpinnerService,
    private authenticationService: AuthService) {
     
     
    //console.log(this.data);
    this.UserId = localStorage.getItem("USERID");
    console.log("yyy"+this.UserId);
    this.editForm = this.formBuilder.group({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      phone: new FormControl(null),
      email: new FormControl(null),
     
    });
    //this.editForm=this.data;
   
    
    this.SpinnerService.hide();
    console.log(this.UserId);
    
  }

  ngOnInit(): void {
   
   
    this.getUser();
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
  getUser()
  {
    this.SpinnerService.show();
    this.userService.getUser().subscribe((data: any) => {
     // this.dummyObj = data[0];

        //this.xTitle=this.dummyObj.title;
       
       console.log(data);
         this.xTitle=data[0].title;
         console.log(this.xTitle);
         this.xFirstName=data[0].firstName;
         this.xLastName=data[0].lastName;
         this.xEmail=data[0].email;
         this.xphone=data[0].contactNo;
         this.xDob=data[0].dob,
         this.xRoleId=data[0].roleId,
         this.xEmployeeId=data[0].employeeId,
         this.xStatus=data[0].status,
         this.xNoOfWrongAttempts=data[0].worngAttempts,
         this.xCreatedDate=data[0].createdDate,
         this.xUserId=data[0].userId,
      this.SpinnerService.hide();
    });
  }
  onSave():void{
    //console.log(this.editForm.value);
    this.SpinnerService.show();
    this.submitted = true;
    // if (this.editForm.invalid) {
    //   this.alertService.success("The form contains one or more missing values!", true);
    //   this.SpinnerService.hide();
    //   return;
    // }
    
    
     console.log( this.data[0].userId);
     console.log(this.data[0].title);
    this.dataModel = new UserModel(
     
      this.xTitle,
      this.editForm.value.firstName,
      this.editForm.value.lastName,
      this.editForm.value.email,
      this.editForm.value.phone,
      this.xDob,
      this.xRoleId,
      this.xEmployeeId,
      this.xStatus,
      this.xNoOfWrongAttempts,
      this.xCreatedDate,
      this.xUserId,
    
      
      
      
      
    );
    console.log(this.data.email);
    this.userService.updateUser(this.dataModel);
    
    this.dialogRef.close(this.editForm.value);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
