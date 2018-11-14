import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileAddressPage } from './profile-address';

@NgModule({
	declarations: [
		ProfileAddressPage,
	],
	imports: [
		IonicPageModule.forChild(ProfileAddressPage)
	],
	exports: [
		ProfileAddressPage
	]
})

export class ProfileAddressModule { }
