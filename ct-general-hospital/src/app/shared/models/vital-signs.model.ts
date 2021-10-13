export class VitalSigns
 {
    constructor(
        public patientVisitId:number,
        public height: number,
        public weight: number,
        public bodyTemparature: number,
        public respirationRate: number,
        public bloodPressure:string,
        public insertedDate: Date,
        public updatedBy:string,
        public id:number,
      ) {}
 }
