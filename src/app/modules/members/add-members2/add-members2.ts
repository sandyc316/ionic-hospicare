import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//import { Patient } from '../../../providers/providers';


@IonicPage()

@Component({
	selector: 'page-add-members2',
	templateUrl: 'add-members2.html'
})

export class AddMembersPage2 {
	showSkip = true;
	dir: string = 'ltr';
	member: any;
	patientProfile: any;

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				// public patient: Patient,
				public toastCtrl: ToastController
		) {
		this.member = navParams.get('data');
	}

	ionViewDidLoad() {

		this.patientProfile = JSON.parse(localStorage.getItem('patient'));
  	}

	//toast message
	presentToast(message) {
		let toast = this.toastCtrl.create({
			message: message,
			duration: 5000,
			position: 'bottom'
		});

		toast.onDidDismiss(() => {
			console.log('Dismissed toast');
		});

		toast.present();
	}

	save() {

		// this.patient.addMember(this.member, this.patientProfile._id).subscribe((resp) => {
		// 	var res = JSON.parse(resp["_body"]);
		// 	if(res.errors) {
		// 		this.presentToast(res.errors[0].message);
		// 	} else {
		// 		this.presentToast(res.message);
		// 		localStorage.removeItem('member');
		// 		this.updateMedicalProfile(this.member, res.data);
		// 	}
		// });
	}

	updateMedicalProfile(medical:any, memberId:any) {

		// this.patient.updateMemberMedicalProfile(medical, this.patientProfile._id, memberId).subscribe((resp) => {
		// 	var res = JSON.parse(resp["_body"]);
		// 	if(res.errors) {
		// 		this.presentToast(res.errors[0].message);
		// 	} else {
		// 		this.presentToast(res.message);
		// 	}
		// });	
	}

	goToMyProfilePage() {
		this.navCtrl.push('MyProfilePage');
	}

	goToAddMemberPage1() {
		this.navCtrl.push('AddMembersPage1');
	}
}