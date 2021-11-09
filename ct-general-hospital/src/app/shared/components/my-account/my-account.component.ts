import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from 'src/app/alert.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
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
      employeeId: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.pattern("[A-Z]{2}[0-9]{5}")]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      phone: new FormControl(null, [Validators.required]),
     
      email: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.email]),
     
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

      this.SpinnerService.hide();
    });
  }
  onSave():void{
    //console.log(this.editForm.value);
    this.SpinnerService.show();
    this.submitted = true;
    if (this.editForm.invalid) {
      this.alertService.success("The form contains one or more missing values!", true);
      this.SpinnerService.hide();
      return;
    }
     
     console.log( this.data[0].userId);
     console.log(this.data[0].title);
    this.dataModel = new UserModel(
     
      this.data[0].title,
      this.editForm.value.firstName,
      this.editForm.value.lastName,
      this.data[0].email,
      this.data[0].password,
      this.editForm.value.phone,
      this.data[0].dob,
      this.data[0].roleId,
      this.data[0].employeeId,
      this.data[0].status,
      this.data[0].noOfWrongAttempts,
      this.data[0].createdDate,
      this.data[0].userId,
      this.data[0].role,
      
      
      
    );
    console.log(this.data.email);
    this.userService.updateUser(this.dataModel).subscribe(
      (data: any) => {
        if (data.isSuccess === true) {
         
          this.alertService.success(data.message, true);
          this.SpinnerService.hide();
        }
        else {
          this.alertService.success(data.message, true);
          this.SpinnerService.hide();
        }
      },
    );
    this.dialogRef.close(this.editForm.value);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
