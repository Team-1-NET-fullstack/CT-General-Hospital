import { DecimalPipe } from '@angular/common';
import { FloatLabelType } from '@angular/material/form-field';

export class VitalSigns {
  constructor(
    public patientVisitId: number,
    public height: number,
    public weight: number,
    public bodyTemperature: number,
    public respirationRate: number,
    public bloodPressure: string
  ) // public insertedDate: Date,
  //public updatedBy: string,
  // public PatientVitalId: number
  {}
}
