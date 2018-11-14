import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AbstractMemberService } from "@app-services/patient/abstract_member";

import { Member } from '@app-models/patient/members';
import { BasePage } from '@app-core/base-page';

@IonicPage()

@Component({
	selector: 'page-add-members1',
	templateUrl: 'add-members1.html'
})

export class AddMembersPage1 extends BasePage {
	member: Member = new Member();
	patientProfile: any;

	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController,
				public navParams: NavParams,
				public memberService: AbstractMemberService
		) {
		super(navCtrl, toastCtrl);

		if (navParams.get('data')) {
			let memberInfo = navParams.get('data');
			if(memberInfo.birthDate)
				memberInfo.birthDate = new Date(memberInfo.birthDate).toISOString();
			else
				memberInfo.birthDate = new Date().toISOString();

			this.member = memberInfo;
			console.log("Member recieved from members page ", this.member);
		}
	}

	ionViewDidLoad() {

		let patientDetails = localStorage.getItem('patient');
		
		if (patientDetails) {
			this.patientProfile = JSON.parse(patientDetails);
		}
  	}

	goToAddMemberPage() {

		if(this.member.firstName === '') {
			this.presentToast('First name is required.');
			return;
		}

		if(this.member.relationship === '') {
			this.presentToast('Relationship is required.');
			return;
		}

		if(this.member.gender === '') {
			this.presentToast('Gender is required.');
			return;
		}

		if(this.member.birthDate === '') {
			this.presentToast('Birth Date is required.');
			return;
		}

		if(this.member.bloodGroup === '') {
			this.presentToast('Blood Group is required.');
			return;
		}

		if(this.member.height === '') {
			this.presentToast('Height is required.');
			return;
		}

		if(this.member.weight === '') {
			this.presentToast('Weight is required.');
			return;
		}

		if (this.member.patientId && this.member.id) { // Update the details
			console.log("Updating member details ", this.member);
			this.updateMemberDetails();
		} else { // Create a new member
			console.log("Creating member details ", this.member);
			this.createMemberProfile();
		}

		let allMembers = localStorage.getItem('members');
			
		if (allMembers) {
			let members = JSON.parse(allMembers);
			let memIndex = members.findIndex(member => member.id == this.member.id);
			
			if (memIndex > -1) {
				members[memIndex] = this.member;
			} else {
				members.push(this.member);
			}

			localStorage.setItem('members', JSON.stringify(members));
			console.log("After updating members in local storage ", localStorage.getItem('members'));
		}

		this.navCtrl.push('MembersListPage', {
			data: this.member
		});
	}

	updateMemberDetails() {
		this.memberService.updateMemberDetails(this.member, this.patientProfile.id, this.member.id).subscribe((resp) => {
			if(resp.errors) {
				this.presentToast(resp.errors[0].message);
			} else {
				this.memberService.updateMemberMedicalProfile(this.member, this.patientProfile.id, this.member.id).subscribe((resp) => {
					if(resp.errors) {
						this.presentToast(resp.errors[0].message);
					} else {
						this.presentToast(resp.message);
					}

				});
			}
		});
	}

	createMemberProfile() {
		this.memberService.addMember(this.member, this.patientProfile.id).subscribe((resp) => {
			if(resp.errors) {
				this.presentToast(resp.errors[0].message);
			} else {
				console.log("Response in create member profile ", resp);
				this.member.id = resp.data.id;
				this.member.patientId = this.patientProfile.id; 
				
				this.memberService.updateMemberMedicalProfile(this.member, this.patientProfile.id, resp.id).subscribe((resp) => {
					if(resp.errors) {
						this.presentToast(resp.errors[0].message);
					} else {
						this.presentToast(resp.message);
					}

				});
			}
		});
	}

	goToMyProfilePage() {
		this.navCtrl.push('MyProfilePage');
	}
}