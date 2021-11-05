export class MedicationMaster {
  constructor(
    public id: string,
    public name: string,
    public dosage: string,
    public description: string,
    
    public isDeprecated: boolean
  ) {}
}
export interface MedicationMasterIncomingDTO {
  Id: string;
  Name: string;
  Dosage: string;
  Description: string;
  
  IsDeprecated: boolean;
}
