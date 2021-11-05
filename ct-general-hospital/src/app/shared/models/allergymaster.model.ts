export class AllergyMaster {
    constructor(
      public id:string,
        public description: string,
        public isFatal: boolean,
       
      ) {}
}
export interface AllergyMasterIncomingDTO {
  Id:string,
       Description: string,
       IsFatal: boolean,
     
    
}
