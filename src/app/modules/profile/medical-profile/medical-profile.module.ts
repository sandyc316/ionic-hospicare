import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalProfilePage } from './medical-profile';

@NgModule({
	declarations: [
		MedicalProfilePage,
	],
	imports: [
		IonicPageModule.forChild(MedicalProfilePage)
	],
	exports: [
		MedicalProfilePage
	]
})

export class MedicalProfileModule { }
