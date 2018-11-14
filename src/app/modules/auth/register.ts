import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, App, ToastController } from 'ionic-angular';

import { BasePage } from '@app-core/base-page';

import { AbstractAuthService } from "@app-services/auth/abstract_auth";


@IonicPage()

@Component({
	selector: 'page-register',
	templateUrl: 'register.html'
})

export class RegisterPage extends BasePage{
  	registerForm: FormGroup;

  	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController,
				public formBuilder: FormBuilder, 
    		    public authService: AbstractAuthService) {
	    
	    super(navCtrl, toastCtrl, false);
	    
	    this.registerForm = formBuilder.group({
			'username': [
				'',
				Validators.compose([Validators.required, Validators.minLength(4)])
			],
			'password': [
				'',
				Validators.compose([Validators.required, Validators.minLength(4)])
			],
			'firstname': [
				'',
				Validators.compose([Validators.required, Validators.minLength(4)])
			],'lastname': [
				'',
				Validators.compose([Validators.required, Validators.minLength(4)])
			]
	    });
	}

	ionViewDidLoad() {
	}

	registerUser(form) {
		this.authService.register(form.username, form.password, form.firstname, form.lastname).subscribe((resp) => {
			console.log(resp);
			if(resp.errors) {
				this.presentToast(resp.errors[0].message);
			} else {
				localStorage.setItem('email', resp.data.email);
				this.navCtrl.push('LoginPage');
			}

		}, (err) => {
			this.presentToast('Could not register. Please try again!');
			console.log("Could not register. Please try again!", err);
		});

	}

	login() {
		this.navCtrl.push('LoginPage');
	}

}