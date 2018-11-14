import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { Patient } from '@app-models/patient/patients';

import { AbstractPatientService } from "@app-services/patient/abstract_patient";

import { BasePage } from '@app-core/base-page';

@IonicPage()

@Component({
	selector: 'page-medical-profile',
	templateUrl: 'medical-profile.html'
})

export class MedicalProfilePage extends BasePage {
	patientProfile: Patient = new Patient();
	medicalProfile: any = this.patientProfile.medicalProfile;

	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController,
				public patientService: AbstractPatientService
		) {
		super(navCtrl, toastCtrl);
	}

	ionViewDidLoad() {

		this.patientProfile = JSON.parse(localStorage.getItem('patient'));
		
		if(this.patientProfile && this.patientProfile.medicalProfile) {
			let bday = this.patientProfile.medicalProfile.birthDate;
			this.patientProfile.medicalProfile.birthDate = new Date(bday).toISOString()
			this.medicalProfile = this.patientProfile.medicalProfile;
		}

  	}

	save() {
		if(this.medicalProfile.gender === '') {
			this.presentToast('Gender is required.');
			return;
		}

		if(this.medicalProfile.birthDate === '') {
			this.presentToast('Birth Date is required.');
			return;
		}

		if(this.medicalProfile.bloodGroup === '') {
			this.presentToast('Blood Group is required.');
			return;
		}

		if(this.medicalProfile.height === '') {
			this.presentToast('Height is required.');
			return;
		}

		if(this.medicalProfile.weight === '') {
			this.presentToast('Weight is required.');
			return;
		}

		this.patientService.updateMedicalProfile(this.medicalProfile, this.patientProfile.id).subscribe((resp) => {
			
			if(resp.errors) {
				this.presentToast(resp.errors[0].message);
			} else {
				this.presentToast(resp.message);
				this.patientProfile.medicalProfile = this.medicalProfile;
				localStorage.setItem('patient', JSON.stringify(this.patientProfile));
			}
		});

	}

	goToMyProfilePage() {
		this.navCtrl.push('MyProfilePage');
	}
}