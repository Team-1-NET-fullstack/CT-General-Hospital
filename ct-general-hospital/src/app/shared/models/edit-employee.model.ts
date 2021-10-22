export class EditEmployee {
  constructor(
    public id: number,
    public title: string,
    public name: string,
    public dob: Date,
    public emailId: string,
    public role: string,
    public joining: Date,
    public status: string
  ) 
  {}
}
