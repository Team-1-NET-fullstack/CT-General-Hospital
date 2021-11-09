export class User {
  constructor(
    public userName: string,
    public password: string,
    public roleId: number,
    public title: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string,
    public dob: Date,
    public employeeId: string,
    public status?: string,
    public noOfWrongAttempts?: number,
    public createdDate?: Date,
    public userId?: number,
    public role?: string,
    public UserId?: number
  ) {}
}
