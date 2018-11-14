import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Api } from '../api';
import { AbstractAppointmentService } from "@app-services/appointment/abstract-appointment";

@Injectable()
export class AppointmentService extends AbstractAppointmentService {

	JWTtoken: any;
	app: any;
	url: any;
	PatientUrl: string;
	AppointmentUrl: string;

	constructor(public http: Http,
				public api: Api) {
		super();
	}

	getAllMembers(patientId) {

		return this.api.doGet(this.PatientUrl+patientId+'/member');
	}

	bookAnAppointment(appointment) {
		
		return this.api.doPost(this.AppointmentUrl, appointment);
	}

	getAppointment(appointmentId) {
		
		return this.api.doGet(this.AppointmentUrl, appointmentId);
	}
}