import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Api } from '../api';

@Injectable()
export class MemberService extends Api {
	JWTtoken: any;
	app: any;
	url: any;
	patientURL: string;

	constructor(public http: Http) {

		super(http, "Patient");
	}

	getMembers(patientId) {
		return this.doGet('patients/' + patientId + '/members', {});
	}

	getMember(patientId, memberId) {
		return this.doGet('patients/' + patientId + '/members/' + memberId, {});
	}

	addMember(member, patientId) {
		return this.doPost('patients/' + patientId + '/members', member);
	}

	updateMemberDetails(member, patientId, memberId) {
		return this.doPost('patients/' + patientId + '/members/' + memberId, member);
	}

	updateMemberMedicalProfile(medicalProfile, patientId, memberId) {
		
		return this.doPost('patients/' + patientId + '/member/' + memberId + '/medical', medicalProfile);
	}

}
