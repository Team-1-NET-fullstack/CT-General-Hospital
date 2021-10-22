export class EditPatient {
  constructor(
    public id: number,
    public title: string,
    public name: string,
    public dob: Date,
    public emailId: string,
    public registeration: Date,
    public status: string
  ) {}
}
