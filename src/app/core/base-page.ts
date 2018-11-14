import { Component, Injector } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';


export class BasePage {
	public loginRequired = true;

	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController,
				loginRequired: boolean = true) {

		if (localStorage['email']) {
			if (!loginRequired)
				this.navCtrl.push('PatientHomepage');
		} else if (loginRequired)
			this.navCtrl.push('LoginPage');
	}

	//toast message
	presentToast(message) {
		let toast = this.toastCtrl.create({
			message: message,
			duration: 5000,
			position: 'top'
		});

		toast.present();
	}

	ionViewDidEnter() {

	}

	ionViewWillLeave() {
		
	}
}
