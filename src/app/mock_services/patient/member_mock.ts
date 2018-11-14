import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';

import members_data from '@app-models/patient/data/members';

import { AbstractMemberService } from "@app-services/patient/abstract_member";

@Injectable()
export class MemberMockService extends AbstractMemberService {
	static membersData = members_data.members;
	static latestMemberId = MemberMockService.membersData.length;

	constructor() {
		super();
	}

	getMembers(patientId): Observable<any> {
		let result = MemberMockService.membersData.filter(member => member.patientId == patientId);
		
		if (result.length > 0) {
			return Observable.of({data: {members:result}});
		} else 
			return Observable.of({errors:[{"message": "No members found for the given patient id."}]});
	}

	getMember(patientId, memberId): Observable<any> {
		return;
	}

	addMember(member, patientId): Observable<any> {
		member.id = ++MemberMockService.latestMemberId;
		member.patientId = patientId;

		MemberMockService.membersData.push(member);

		return Observable.of({data:member, message: "User member successfully added"});
	}

	updateMemberDetails(member, patientId, memberId): Observable<any> {
		let itemIndex = MemberMockService.membersData.findIndex(member => member.id == memberId); 

		if (itemIndex > -1) {
			MemberMockService.membersData[itemIndex]['firstName'] = member.firstName;
			MemberMockService.membersData[itemIndex]['lastName'] = member.lastName;
			MemberMockService.membersData[itemIndex]['relationship'] = member.relationship;

			return Observable.of({data: {}, message: "Member details successfully updated"});

		} else {
			return Observable.of({errors:[{"message": "No user member found for the given id"}]});
		}
	}


	updateMemberMedicalProfile(member, patientId, memberId): Observable<any> {
		let itemIndex = MemberMockService.membersData.findIndex(member => member.id == memberId); 

		if (itemIndex > -1) {
			MemberMockService.membersData[itemIndex]['gender'] = member.gender;
			MemberMockService.membersData[itemIndex]['height'] = member.height;
			MemberMockService.membersData[itemIndex]['weight'] = member.weight;
			MemberMockService.membersData[itemIndex]['birthDate'] = member.birthDate;
			MemberMockService.membersData[itemIndex]['bloodGroup'] = member.bloodGroup;
			MemberMockService.membersData[itemIndex]['allergies'] = member.allergies;
			MemberMockService.membersData[itemIndex]['medicalHistory'] = member.medicalHistory;

			return Observable.of({data: {}, message: "Member medical profile details successfully updated"});
		} else {
			return Observable.of({errors:[{"message": "No user member found for the given id"}]});
		}
	}

}
