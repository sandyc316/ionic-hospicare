import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AbstractPatientService } from "@app-services/patient/abstract_patient";

import { Address } from '@app-models/patient/address';
import { Patient } from '@app-models/patient/patients';

import { BasePage } from '@app-core/base-page';

@IonicPage()

@Component({
	selector: 'page-profile-address',
	templateUrl: 'profile-address.html'
})

export class ProfileAddressPage extends BasePage {
	address: Address = new Address();
	patient: Patient = new Patient();

	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController,
				public navParams: NavParams,
				public patientService: AbstractPatientService
		) {

		super(navCtrl, toastCtrl);

		if (navParams.get('data')) {
			this.address = navParams.get('data');
		}
	}

	ionViewDidLoad() {
		let patientDetails = localStorage.getItem('patient');
		
		if (patientDetails) {
			this.patient = JSON.parse(patientDetails);
		}
  	}

	goToHomepage() {
		this.navCtrl.push('PatientHomepage');
	}

	goToMyContactsPage() {
		this.navCtrl.push('ProfileContactsPage');
	}

	saveAddressDetails() {
		
		if(this.address.tag === '') {
			this.presentToast('Tag is required.');
			return;
		}

		if(this.address.locality === '') {
			this.presentToast('Locality is required.');
			return;
		}

		if(this.address.state === '') {
			this.presentToast('State is required.');
			return;
		}

		if(this.address.city === '') {
			this.presentToast('City is required.');
			return;
		}

		if(this.address.street === '') {
			this.presentToast('Street is required.');
			return;
		}

		if(this.address.address === '') {
			this.presentToast('Address is required.');
			return;
		}

		if(this.address.zipcode === '') {
			this.presentToast('Zipcode is required.');
			return;
		}

		this.patientService.addUpdateAddress(this.address, this.patient.id).subscribe((resp) => {
			if(resp.errors) {
				this.presentToast(resp.errors[0].message);
			} else {
				this.presentToast(resp.message);
				let userAddresses = localStorage.getItem('addresses');
			
				if (userAddresses) {
					let addresses = JSON.parse(userAddresses);
					let addrIndex = addresses.findIndex(addr => addr.id == resp.data.id);
					
					if (addrIndex > -1) {
						addresses[addrIndex] = resp.data;
					} else {
						addresses.push(resp.data);
					}

					localStorage.setItem('addresses', JSON.stringify(addresses));
					console.log("After updating addresses in local storage ", localStorage.getItem('addresses'));
				}
			}
		});	
	}
}