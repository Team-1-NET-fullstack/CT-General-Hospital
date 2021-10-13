export class ProcedureDetails {
    constructor(
        public patientVisitId:number,
        public procedureId: string,
        public procedureDescription: string,
        public isDepricated: boolean,
        public insertedDate: Date,
        public updatedBy:string,
        public id:number,
      ) {}
}
