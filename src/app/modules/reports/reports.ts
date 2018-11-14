import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

@IonicPage()

@Component({
	selector: 'page-reports',
	templateUrl: 'reports.html'
})

export class ReportsPage {
	name: any;
	email: any;
	mobile: any;
	address1: any;
	address2: any;

	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController
		) {
	}

	//toast message
	presentToast(message) {
		let toast = this.toastCtrl.create({
			message: message,
			duration: 5000,
			position: 'top'
		});

		toast.onDidDismiss(() => {
			console.log('Dismissed toast');
		});

		toast.present();
	}


	goToHomePage() {
		this.navCtrl.push('PatientHomepage');
	}

	goToMyProfilePage() {
		this.navCtrl.push('MyProfilePage');
	}
}