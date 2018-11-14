import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { MemberService } from '@app-services/patient/member';

import { BasePage } from '@app-core/base-page';
import { Member } from '@app-models/patient/members';

import { AbstractMemberService } from "@app-services/patient/abstract_member";


@IonicPage()
@Component({
	selector: 'page-members-list',
	templateUrl: 'members-list.html'
})


export class MembersListPage extends BasePage {
	patientProfile: any;
	membersList: Member[];

	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController,
				public memberService: AbstractMemberService) {
		
			super(navCtrl, toastCtrl);
	}

	ionViewDidLoad() {
		let patient = localStorage.getItem('patient');
		
		if (!patient) {
			console.log("User profile not found. User not logged in.");
		} else {
			this.patientProfile = JSON.parse(patient);

			let members = localStorage.getItem('members');
			console.log("Patient id is ", this.patientProfile.id);
			if (!members) {
				this.memberService.getMembers(this.patientProfile.id).subscribe((resp) => {
					if(resp.errors) {
						this.presentToast(resp.errors[0].message);
					} else {
						console.log("Members for patient are ", resp);

						if(resp.data.members) {
							this.membersList = resp.data.members;
							localStorage.setItem('members', JSON.stringify(resp.data.members));	
						}
					}
					
				}, (err) => {
					console.log("Fetching members error", err.json().message);
				});
				
			} else {
				this.membersList = JSON.parse(members);
				console.log("Members from local storage ", this.membersList);
			}
		}
  	}

	goToAddMemberPage() {

		this.navCtrl.push('AddMembersPage1', {
			data: ""
		});
	}

	editMember(member:any) {
		this.navCtrl.push('AddMembersPage1', {
			data: member
		});
	}

	goToMyProfilePage() {
		this.navCtrl.push('MyProfilePage');
	}
}