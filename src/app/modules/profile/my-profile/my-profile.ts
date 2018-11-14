import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';


@IonicPage()

@Component({
	selector: 'page-my-profile',
	templateUrl: 'my-profile.html'
})

export class MyProfilePage {
	patientProfile: any;

	constructor(public navCtrl: NavController
		) {
	}

	ionViewDidLoad() {
		let profile = localStorage.getItem('patient');
		
		this.patientProfile = JSON.parse(localStorage.getItem('patient'));
  	}


	goToHomepage() {
		this.navCtrl.push('PatientHomepage');
	}

	goToContactDetailsPage() {
		this.navCtrl.push('ProfileContactsPage');
	}

	goToMedicalProfilePage() {
		this.navCtrl.push('MedicalProfilePage');
	}

	goToHomePage() {
		this.navCtrl.push('PatientHomepage');
	}

	goToAddmembersPage() {
		this.navCtrl.push('MembersListPage');
	}

	goToLoginPage() {
		localStorage.removeItem('email');
		localStorage.removeItem('patient');
		localStorage.removeItem('addresses');
		localStorage.removeItem('members');

		this.navCtrl.push('LoginPage');
	}
}