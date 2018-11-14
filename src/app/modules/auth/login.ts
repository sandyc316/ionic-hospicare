import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, App, ToastController } from 'ionic-angular';


import { AbstractPatientService } from "@app-services/patient/abstract_patient";
import { AbstractAuthService } from "@app-services/auth/abstract_auth";

import { BasePage } from '@app-core/base-page';


@IonicPage()

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})

export class LoginPage extends BasePage{
  	loginForm: FormGroup;

  	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController,
				public formBuilder: FormBuilder, 
    		    public authService: AbstractAuthService,
    		    public patientService: AbstractPatientService) {
	    
	    super(navCtrl, toastCtrl, false);

	    this.loginForm = formBuilder.group({
			'username': [
				'',
				Validators.compose([Validators.required, Validators.minLength(4)])
			],
			'password': [
				'',
				Validators.compose([Validators.required, Validators.minLength(4)])
			]
	    });
	}

	ionViewDidLoad() {
		// if (localStorage['email']) {
		// 	this.navCtrl.push('PatientHomepage');
		// }
	}

	loginPage(form) {
		this.authService.login(form.username, form.password).subscribe((resp) => {
			
			if(resp.errors) {
				this.presentToast(resp.errors[0].message);
			} else {
				localStorage.setItem('email', resp.data.email);
				
				this.patientService.getContactDetails(resp.data.email).subscribe((response) => {
					localStorage.setItem('patient', JSON.stringify(response.data));
					
				}, (err) => {
					console.log("Could not set patient profile after login ", err);
				});

				this.navCtrl.push('PatientHomepage');
			}

		}, (err) => {
			this.presentToast('Incorrect login credentials. Please try again!');
			console.log("Incorrect login credentials. Please try again!", err);
		});

	}

	register() {
		this.navCtrl.push('RegisterPage');
	}

}