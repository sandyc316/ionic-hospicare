import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileContactsPage } from './profile-contacts';

@NgModule({
	declarations: [
		ProfileContactsPage,
	],
	imports: [
		IonicPageModule.forChild(ProfileContactsPage)
	],
	exports: [
		ProfileContactsPage
	]
})

export class ProfileContactsModule { }
