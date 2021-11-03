export class AllergyMaster {
    constructor(
        public description: string,
        public isFatal: boolean,
       
      ) {}
}
export interface AllergyMasterIncomingDTO {
       Description: string,
       IsFatal: boolean,
     
    
}
