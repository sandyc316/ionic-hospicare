import { Observable } from "rxjs/Observable";

import { Address } from '@app-models/patient/address';
import { Patient } from '@app-models/patient/patients';


export abstract class AbstractDocAtHomeService {

	abstract getContactDetails(email: string): Observable<any>;

	abstract updateContactDetails(contactInfo: any): Observable<any>;

	abstract getAddresses(patientId: string): Observable<any>;

	abstract addUpdateAddress(address: Address, patientId: string): Observable<any>;

	abstract updateMedicalProfile(medicalProfile: string, patientId: string): Observable<any>;
}
