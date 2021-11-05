export class DiagnosisMaster {
  constructor(
    public id: string,
    public name: string,
    public description: string
  ) {}
}
export interface DiagnosisMasterIncomingDTO {
  Id: string;
  Name: string;
  Description: string;
}
