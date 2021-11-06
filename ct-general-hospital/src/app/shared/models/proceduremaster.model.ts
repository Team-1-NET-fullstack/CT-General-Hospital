export class ProcedureMaster {
    constructor(
      public id:string,
        public name: string,
        public description: string,
        public isDeprecated: boolean
      ) {}
}
export interface ProcedureMasterIncomingDTO {
  Id: string;
  Name: string;
  Description: string;
  IsDeprecated: boolean;
}