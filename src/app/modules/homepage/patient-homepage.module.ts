import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientHomepage } from './patient-homepage';

@NgModule({
	declarations: [
		PatientHomepage,
	],
	imports: [
		IonicPageModule.forChild(PatientHomepage)
	],
	exports: [
		PatientHomepage
	]
})
export class PatientHomepageModule { }
