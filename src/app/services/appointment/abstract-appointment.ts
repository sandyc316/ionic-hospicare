import { Observable } from "rxjs/Observable";

import { Address } from '@app-models/patient/address';
import { Patient } from '@app-models/patient/patients';
import { Appointment } from '@app-models/appointment/appointment';


export abstract class AbstractAppointmentService {

	abstract bookAnAppointment(appointment: Appointment): Observable<any>;

	abstract getAppointment(appointmentId: string): Observable<any>;
}
