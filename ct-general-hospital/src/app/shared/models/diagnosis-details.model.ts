export class DiagnosisDetails {
  constructor(
    public patientVisitId: number,
    public diagnosisCode: string,
    public diagnosisDescription: string,
    public isDepricated: boolean,
    public insertedDate: Date,
    public updatedBy: string
  ) {}
}
