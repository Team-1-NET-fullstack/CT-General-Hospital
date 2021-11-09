export class PhysicianDetailList {
  PhysicianText?: string;
  Id?: number;
}

export class AppointmentInfo {
  patientId?: number;
  id?: number;
  title?: string;
  physicianId?: number;
  startTime?: Date;
  endTime?: Date;
  status?: string;
  reason?: string;
  patientName?: string;
  date?: Date;
  time?: Date;
  physicianName?: string;
}

export class Appointment {
  appointmentId?: number;
  patientId?: number;
  physicianId?: number;
  employeeId?: number;
  title?: string;
  startTime?: Date;
  endTime?: Date;
  status?: string;
  reason?: string;
  isActive?: boolean;
  createdBy?: number;
  modifiedBy?: number;
  patientName?: string;
  physicianName?: string;
}

export class AppointmentCount {}
