import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';


@IonicPage()

@Component({
	selector: 'page-patient-homepage',
	templateUrl: 'patient-homepage.html'
})

export class PatientHomepage {

	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController) {
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

	ionViewDidEnter() {
		// the root left menu should be disabled on the tutorial page
		// this.menu.enable(false);

		// this.network.onConnect().subscribe(data => {
		// 	this.presentToast('You are Online');
		// }, error => console.error(error));

		// this.network.onDisconnect().subscribe(data => {
		// 		this.presentToast('You appear to be offline.');
		// }, error => console.error(error));

		//if logged in , go to homepage
		// if(JSON.parse(localStorage.getItem('userrole'))) {
		// 	 this.navCtrl.push(MainPage);
		// }

	}

	ionViewWillLeave() {
		// enable the root left menu when leaving the tutorial page
		// this.menu.enable(true);
	}
	
	goToMyProfilePage() {
		this.navCtrl.push("MyProfilePage");
	}

	goToBookAnAppointmentPage() {
		console.log('Go to Book Hospital Appointments page');
		// this.navCtrl.push('BookAppointmentpage1');
	}

	goToDiagnosticsPage() {
		console.log('Go to diagnostic page');
		//this.navCtrl.push('DiagnosticsPage');
	}

	goToReportsPage() {
		this.navCtrl.push('ReportsPage');
	}

	goToDoctorAtHomePage() {
		this.navCtrl.push('DoctorAtHomePage1');
	}

	goToLiveConsultancyPage() {
		console.log('Go to Live Consultancy page');
		// this.navCtrl.push('LiveConsultancyPage1');
	}

	goToPharmacyPage() {
		console.log('Go to Pharmacy page');
		//this.navCtrl.push('PharmacyPage');
	}

	goToNursingPage() {
		console.log('Go to Nursing page');
		//this.navCtrl.push('NursingPage');
	}

	goToHealthTipsPage() {
		console.log('Go to HealthTips page');
		//this.navCtrl.push('HealthTipsPage');
	}

	goToSupportPage() {
		console.log('Go to Support page');
		//this.navCtrl.push('SupportPage');
	}

}
