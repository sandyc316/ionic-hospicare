import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorAtHomeSummary } from './doctor-at-home-summary';

@NgModule({
	declarations: [
		DoctorAtHomeSummary,
	],
	imports: [
		IonicPageModule.forChild(DoctorAtHomeSummary)
	],
	exports: [
		DoctorAtHomeSummary
	]
})

export class DoctorAtHomeSummaryModule { }
