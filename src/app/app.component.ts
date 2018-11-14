import { Component, ViewChild, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform, Events, NavController } from 'ionic-angular';

import { Settings } from '../providers/providers';

@Component({
	template: `
	<ion-nav #content #LoggedInNav [root]="rootPage"></ion-nav>`
})
export class MyApp {
	rootPage = 'LoginPage'; //'PatientHomepage';

	@ViewChild(Nav) nav: Nav;

	pages: any[] = [

	]

	constructor(private platform: Platform,
				settings: Settings,
				private config: Config,
				private statusBar: StatusBar
			) {
		this.initTranslate();

	}

	ionViewDidLoad() {
		this.platform.ready().then(() => {

			// this.splashScreen.hide();

		});
	}

	initTranslate() {
		// Set the default language for translation strings, and the current language.
		// this.translate.setDefaultLang('en');

		// if (this.translate.getBrowserLang() !== undefined) {
		// 	this.translate.use(this.translate.getBrowserLang());
		// } else {
		// 	this.translate.use('en'); // Set your language here
		// }

		// this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
		// 	this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
		// });
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}

	ngOnInit() {
		// this.loggingservice.setStringData("Mentor");
		// console.log("app componenet ts data", this.loggingservice.getStringData());

	}

}
