import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Api } from '../api';
import { AbstractDoctorService } from "@app-services/doctor/abstract-doctor";

@Injectable()
export class DoctorService extends AbstractDoctorService {

	JWTtoken: any;
	app: any;
	url: any;
	PatientUrl: string;
	AppointmentUrl: string;

	constructor(public http: Http,
				public api: Api) {
		super();
	}

	getDocDetails(doctorId) {

		return this.api.doGet(this.PatientUrl+doctorId+'/');
	}
}