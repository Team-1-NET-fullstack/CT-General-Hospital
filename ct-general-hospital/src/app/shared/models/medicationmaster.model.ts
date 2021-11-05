export class MedicationMaster {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public dosage: string,
    public isDeprecated: boolean
  ) {}
}
export interface MedicationMasterIncomingDTO {
  Id: string;
  Name: string;
  Description: string;
  Dosage: string;
  isDeprecated: boolean;
}
