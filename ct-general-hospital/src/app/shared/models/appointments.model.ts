export class Appointments {
  constructor(
    public PatientId: number,
    public PhysicianId: number,
    public Reason: string,
    public TimeSlot: number,
    public Duration: number,
    public Status: boolean,
    public IsActive: boolean,
    public CreatedBy: number,
    public CreatedDate: Date,
    public UpdatedBy: number,
    public SlotDate: Date,
    public UpdatedDate: Date,
    public AppointmentId?: number,
    public PhysicianName?: string,
    public PatientName?: string,
    public PhysicianEmployeeId?: number
  ) {}
}
