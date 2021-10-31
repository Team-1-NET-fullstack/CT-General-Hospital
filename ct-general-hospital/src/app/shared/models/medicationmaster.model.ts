export class MedicationMaster {
    constructor(
        public medicationMasterId: string,
        public name: string,
        public description: string,
        public dosage: string,
        public isDeprecated: string,
        public insertedDate: string,
        public updatedBy:string,
        public createdDate: string,
        public createdBy:string,
        public id:string,
      ) {}
}
