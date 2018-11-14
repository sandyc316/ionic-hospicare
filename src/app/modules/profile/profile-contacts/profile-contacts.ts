import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';


import { Patient } from '@app-models/patient/patients';
import { Address } from '@app-models/patient/address';

import { AbstractPatientService } from "@app-services/patient/abstract_patient";

import { BasePage } from '@app-core/base-page';


@IonicPage()

@Component({
	selector: 'page-profile-contacts',
	templateUrl: 'profile-contacts.html'
})

export class ProfileContactsPage extends BasePage {
	patient: Patient = new Patient();
	addresses: Address[] = [];

	constructor(public navCtrl: NavController,
				public patientService: AbstractPatientService,
				public toastCtrl: ToastController
		) {
		super(navCtrl, toastCtrl);
	}

	ionViewDidLoad() {
		let email = localStorage.getItem('email');

		if ( !email ) {
			console.log("User email not found. User not logged in.");
		
		} else {
			this.getProfileDetailsAndAddresses(email);
		}
  	}

  	getProfileDetailsAndAddresses(email: string) {
  		let patientDetails = localStorage.getItem('patient');
			
		if (patientDetails) {
			this.patient = JSON.parse(patientDetails);
			this.getUserAddresses(this.patient.id);

		} else {
			this.patientService.getContactDetails(email).subscribe((resp) => {
				if (!resp.errors) {
					this.patient = resp.data;
					localStorage.setItem('patient', JSON.stringify(resp.data));

					this.getUserAddresses(this.patient.id);
				}
				
			}, (err) => {
				console.log("Fetching contact details error", err);
			});	
		}
  	}

  	getUserAddresses(patientId: string) {
  		let userAddresses = localStorage.getItem('addresses');
			
		if (userAddresses) {
			this.addresses = JSON.parse(userAddresses);
			console.log("User addreses from localstorage ", this.addresses);

		} else {
			this.patientService.getAddresses(patientId).subscribe((resp) => {
				if (!resp.errors) {
					this.addresses = resp.data;
					console.log("User addreses from getAddress method ", resp.data);
					localStorage.setItem('addresses', JSON.stringify(resp.data));	
				}
				
			}, (err) => {
				console.log("Fetching user addresses error", err);
			});	
		}
  	}

	goToHomepage() {
		this.navCtrl.push('PatientHomepage');
	}

	goToMyProfilePage() {
		this.navCtrl.push('MyProfilePage');
	}

	saveContactDetails() {
		
		if(this.patient.firstName === '') {
			this.presentToast('First Name is required.');
			return;
		}

		if(this.patient.lastName === '') {
			this.presentToast('Last Name is required.');
			return;
		}

		if(this.patient.email === '') {
			this.presentToast('Email is required.');
			return;
		}

		if(this.patient.phone === '') {
			this.presentToast('Phone is required.');
			return;
		}

		this.patientService.updateContactDetails(this.patient).subscribe((resp) => {
			if(resp.errors) {
				this.presentToast(resp.errors[0].message);
			} else {
				this.presentToast(resp.message);

				this.patient['id'] = resp.data._id;
				localStorage.setItem('patient', JSON.stringify(this.patient));
			}
		});
	}

	addAddress() {
		this.navCtrl.push('ProfileAddressPage');
	}

	editAddress(address:any) {
		
		this.navCtrl.push('ProfileAddressPage', {
			data: address
		});
	}
}