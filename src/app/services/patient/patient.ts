import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Api } from '../api';
import { AbstractPatientService } from "@app-services/patient/abstract_patient";

@Injectable()
export class PatientService extends AbstractPatientService {
	JWTtoken: any;
	app: any;
	url: any;
	patientURL: string;


	constructor(public http: Http,
				public api: Api) {

		super();
	}

	getContactDetails(email) {
		return this.api.doGet('patients', {"email": email});
	}

	updateContactDetails(contactInfo) {
		return this.api.doPost('patients', contactInfo).map(res => res["_body"]);
	}

	public getAddresses(patientId) {
		return this.api.doGet('patients/' + patientId + '/address');
	}

	public getAddressById(patientId, addressId) {
		return this.api.doGet('patients/' + patientId + '/address/' + addressId);
	}

	addUpdateAddress(address, patientId) {

		let seq;

		if(address._id) {
			seq = this.api.doPost('patients/' + patientId + '/address/' + address._id, address);
		} else {
			seq = this.api.doPost('patients/' + patientId + '/address', address);
		}

		return seq;
	}

	updateMedicalProfile(medicalProfile, patientId) {
		
		return this.api.doPost('patients/' + patientId + '/medical', medicalProfile);
	}
}
