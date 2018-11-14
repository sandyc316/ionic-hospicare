import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';

import patient_data from '@app-models/patient/data/patients';
import patient_address_data from '@app-models/patient/data/addresses';

import { AbstractPatientService } from "@app-services/patient/abstract_patient";

@Injectable()
export class PatientMockService extends AbstractPatientService {
	static patientsData = patient_data.patients;
	static addressesData = patient_address_data.addresses;
	static latestAddrId = PatientMockService.addressesData.length;

	constructor() {
		super();
	}

	public getContactDetails(email): Observable<any> {
		let result = PatientMockService.patientsData.filter(patient => patient.email == email);
		
		if (result.length > 0) {
			return Observable.of({data: result[0]});
		} else 
			return Observable.of({errors:[{"message": "No user profile found for the given email"}]});
	}

	public updateContactDetails(contactInfo): Observable<any> {
		let itemIndex = PatientMockService.patientsData.findIndex(patient => patient.email == contactInfo.email);

		if (itemIndex > -1) {
			PatientMockService.patientsData[itemIndex] = contactInfo;
			return Observable.of({data:[], message: "User profile details successfully added"});
		} else {
			PatientMockService.patientsData.push(contactInfo);
			return Observable.of({data:[], message: "User profile details successfully added"});
		}
	}

	public getAddresses(patientId): Observable<any> {
		let result = PatientMockService.addressesData.filter(address => address.patientId == patientId);
		
		if (result.length > 0) {
			return Observable.of({data: result});
		} else 
			return Observable.of({errors:[{"message": "No user address found for the given patient id"}]});
	}

	public getAddressById(patientId, addressId) {
		let itemIndex = PatientMockService.patientsData.findIndex(patient => patient.id == patientId); 

		if (itemIndex > -1) {
			let addrIndex = PatientMockService.addressesData.findIndex(addr => addr.id == addressId);

			if (addrIndex > -1) {
				let address = PatientMockService.addressesData[addrIndex];

				return Observable.of({data: {"address": address}});
		
			} else {
				return Observable.of({errors:[{"message": "No user address found for the given address id"}]});
			}	
		} else {
			return Observable.of({errors:[{"message": "No user profile found for the given id"}]});
		}
	}

	public addUpdateAddress(address, patientId): Observable<any> {
		let itemIndex = PatientMockService.patientsData.findIndex(patient => patient.id == patientId); 

		if (itemIndex > -1) {
			// For address with id passed update the address else add a new address
			if (address.id) {
				let addrIndex = PatientMockService.addressesData.findIndex(addr => addr.id == address.id);

				if (addrIndex > -1) {
					address.patiendId = patientId;

					PatientMockService.addressesData[addrIndex] = address;

					return Observable.of({data:address, message: "Your address details have been successfully updated"});
			
				} else {
					return Observable.of({errors:[{"message": "No user address found for the given id"}]});
				}	
			} else {
				address.id = ++PatientMockService.latestAddrId;
				address.patiendId = patientId;

				PatientMockService.addressesData.push(address);

				return Observable.of({data:address, message: "User address successfully added"});
			}
		} else {
			return Observable.of({errors:[{"message": "No user profile found for the given id"}]});
		}
	}

	public updateMedicalProfile(medicalProfile, patientId): Observable<any> {
		let itemIndex = PatientMockService.patientsData.findIndex(patient => patient.id == patientId); 

		if (itemIndex > -1) {
			PatientMockService.patientsData[itemIndex].medicalProfile = medicalProfile;
			return Observable.of({data:[], message: "User medical profile details successfully added"});
		} else {
			return Observable.of({errors:[{"message": "No user profile found for the given id"}]});
		}
	}
}
