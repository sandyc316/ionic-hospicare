import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorAtHomePage1 } from './doctor-at-home1';

@NgModule({
	declarations: [
		DoctorAtHomePage1,
	],
	imports: [
		IonicPageModule.forChild(DoctorAtHomePage1)
	],
	exports: [
		DoctorAtHomePage1
	]
})

export class DoctorAtHome1Module { }
