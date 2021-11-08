import { Time } from '@angular/common';

export class VisitDetails {
  //constructor(
  public patientVisitId!: number;
  public Reason!: string;
  public Duration!: number;
  public VisitDate!: Date;
  public DiagnosisDescription!: String;
  public MedicationDescription!: String;
  public ProcedureDescription!: String;
  public AllergyDescription!: String;
  public PatientId!: number;
  public PhysicianId!: number;
  public StartTime!: Time;
  public CreatedBy!: number;
  public CreatedDate!: Date;
  public updatedBy!: number;
  public updatedDate!: Date;
  //    ) {}
}
