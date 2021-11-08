export interface Appointments {
  AppointmentId: number;
  PatientId: number;
  PhysicianId: number;
  EmployeeId?: number;
  Title: string;
  StartTime: Date;
  EndTime: Date;
  Status: string;
  Reason: string;
  IsActive?: boolean;
  CreatedBy?: number;
  ModifiedBy?: number;
  CreatedDate?: Date;
  ModifiedDate?: Date;
  PhysicianName: string;
  PatientName: string;
}
