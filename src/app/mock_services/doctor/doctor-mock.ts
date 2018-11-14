import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';

import { Doctor } from '@app-models/doctor/doctor';

import doctorsData from '@app-models/doctor/data/doctors';

import { AbstractDoctorService } from "@app-services/doctor/abstract-doctor";

@Injectable()
export class DoctorMockService extends AbstractDoctorService {
	static doctorsList = doctorsData.doctors;

	constructor() {
		super();
	}

	getDocDetails(doctorId: string): Observable<any> {

		let result = DoctorMockService.doctorsList.filter(doctor => doctor.id == doctorId);
		
		if (result.length > 0) {
			return Observable.of({data: {"doctor": result[0]}});
		} else 
			return Observable.of({errors:[{"message": "No doctor found for the given id"}]});
	}
}