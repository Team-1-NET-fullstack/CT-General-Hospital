export class EditEmployee {
  constructor(
    public id: number,
    public title: string,
    public firstName: string,
    public lastName: string,
    public dob: Date,
    public gender:string,
    public address:string,
    public pincode:number,
    public state:string,
    public contactNumber:number,
    public emailId: string,
    public role: string,
    public joining: Date,
    public status: string
  ) 
  {}
}
