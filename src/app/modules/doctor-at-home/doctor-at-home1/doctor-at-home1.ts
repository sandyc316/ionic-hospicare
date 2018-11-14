import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';

import { BasePage } from '@app-core/base-page';



@IonicPage()

@Component({
	selector: 'page-doctor-at-home1',
	templateUrl: 'doctor-at-home1.html'
})

export class DoctorAtHomePage1 extends BasePage {
	patient: any;
	addresses: any;
	members: any[];
	selectedMember: any;
	selectedAddress: any;
	visitDate: any;
	visitTime: any;
	visitReason: string;

	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController,
				public alertCtrl: AlertController
		) {
		super(navCtrl, toastCtrl);
	}

	ionViewDidLoad() {
		let patient = localStorage.getItem('patient');

		if ( !patient ) {
			console.log("Patient not found. User not logged in.");
		
		} else {
			console.log(patient);
			let patientInfo = JSON.parse(patient);

			let addresses = localStorage.getItem("addresses");

			if(!addresses) {
				console.log("Patient addresses not found. Redirecting to profile screen.");
				this.goToProfilePage(true);
			} else {
				this.addresses = JSON.parse(addresses);
			}

			this.members = [];

			this.members.push({
				name: "Self",
				relationship: "",
				isMember: false,
				memberId: 0
			});

			let members = localStorage.getItem("members");
			if(members) {
				let patientMembers = JSON.parse(members);
				let that = this;
				patientMembers.forEach(function (value, key) {
					that.members.push({
						name: value['firstName'] + " " + value['lastName'],
						relationship: value['relationship'],
						isMember: true,
						memberId: value['id']
					});
				});
			}
		}

		// If form values already filled populate them
		let visitDetails = localStorage.getItem('docVisitDetails');
		
		if(visitDetails) {
			let details = JSON.parse(visitDetails);
				
			this.selectedMember = details.memberId;
			this.selectedAddress = details.addressId;
			this.visitTime = details.time;
			this.visitDate = details.date;
			this.visitReason = details.reason;
		}
  	}

  	goToProfilePage(showAlert: boolean) {
  		if (showAlert) {
			let alert = this.alertCtrl.create({
				title: 'Profile incomplete',
				subTitle: 'Please complete your profile.',
				buttons: ['OK']
			});
			
			alert.present();	
  		}

  		this.navCtrl.push('ProfileContactsPage');
  		
  	}

	goToMyHomePage() {
		this.navCtrl.push('PatientHomepage');
	}

	goToDoctorAtHomePage2() {
		let member = this.members.filter(member => member.memberId == this.selectedMember );
		let address = this.addresses.filter(address => address.id == this.selectedAddress );

		let docVisitDetails = {
			'member': member.length? member[0] : {},
			'memberId': this.selectedMember,
			'address': address.length? address[0] : {},
			'addressId': this.selectedAddress,
			'date': this.visitDate,
			'time': this.visitTime,
			'reason': this.visitReason
		}

		localStorage.setItem("docVisitDetails", JSON.stringify(docVisitDetails));
		this.navCtrl.push('DoctorAtHomePage4');
	}
}