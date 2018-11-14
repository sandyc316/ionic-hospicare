import { Observable } from "rxjs/Observable";

import { Address } from '@app-models/patient/address';
import { Patient } from '@app-models/patient/patients';


export abstract class AbstractMemberService {

	abstract getMembers(patientId): Observable<any>;

	abstract getMember(patientId, memberId): Observable<any>;

	abstract addMember(member, patientId): Observable<any>;

	abstract updateMemberDetails(member, patientId, memberId): Observable<any>;

	abstract updateMemberMedicalProfile(medicalProfile, patientId, memberId): Observable<any>;
}
