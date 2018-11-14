import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorAtHomePage4 } from './doctor-at-home4';

@NgModule({
	declarations: [
		DoctorAtHomePage4,
	],
	imports: [
		IonicPageModule.forChild(DoctorAtHomePage4)
	],
	exports: [
		DoctorAtHomePage4
	]
})

export class DoctorAtHome4Module { }
