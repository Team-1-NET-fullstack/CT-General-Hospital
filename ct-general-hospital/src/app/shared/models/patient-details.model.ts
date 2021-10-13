export class PatientDetails {
    constructor(
        public patientVisitId:number,
        public title: boolean,
        public firstName: string,
        public lastName: boolean,
        public dateOfBirth:Date,
        public gender:boolean,
        public race:string,
        public ethinicity:string,
        public languagesKnown:string,
        public emailId:string,
        public telePhoneNo:number,
        public address:string,
        public allergies:boolean,
        public insertedDate: Date,
        public updatedBy:string,
        public id:number,
      ) {}
}
