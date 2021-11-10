
export class UserModel {
  constructor(
    public title: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public phone: string,
    public dob: Date,
    public roleId: number,
    public employeeId:string,
    public status?:string,
    public noOfWrongAttempts?:number,
    public createdDate?:Date,
    public userId?:number,
    public role?:string,
    public UserId?: number,


  ) { }
  }
