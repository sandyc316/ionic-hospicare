import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';

import { Appointment } from '@app-models/appointment/appointment';

import { AbstractAppointmentService } from "@app-services/appointment/abstract-appointment";

@Injectable()
export class AppointmentMockService extends AbstractAppointmentService {
	static appointmentsData: Appointment[] = [];
	static latestAppointmentId = AppointmentMockService.appointmentsData.length;

	constructor() {
		super();
	}

	bookAnAppointment(appointment: Appointment): Observable<any> {

		appointment.id = '' + ++AppointmentMockService.latestAppointmentId;

		AppointmentMockService.appointmentsData.push(appointment);	
		console.log("List of appointments after adding an appointment ", AppointmentMockService.appointmentsData);

		return Observable.of({data:appointment, message: "Appointment successfully created"});
	}

	getAppointment(appointmentId: string): Observable<any> {

		let result = AppointmentMockService.appointmentsData.filter(appointment => appointment.id == appointmentId);
		
		if (result.length > 0) {
			return Observable.of({data: {"appointment": result[0]}});
		} else 
			return Observable.of({errors:[{"message": "No appointment found for the given id"}]});
	}

	isBigEnough(element, index, array) { 
		console.log(element);
		console.log(array);

		return true; 
	}
}