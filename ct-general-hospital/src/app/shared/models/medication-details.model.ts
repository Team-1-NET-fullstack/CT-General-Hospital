export class MedicationDetails {
    constructor(
        public patientVisitId:number,
        public drugId: string,
        public drugName: string,
        public drugBrandName: string,
        public drugGenericName: string,
        public drugForm: string,
        public insertedDate: Date,
        public updatedBy:string,
        public id:number,
      ) {}
}
