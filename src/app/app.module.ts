import { ErrorHandler, NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

import { Settings } from '../providers/providers';

import { MyApp } from './app.component';

import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';


// All API services
import { Api } from './services/api';
import { PatientService } from '@app-services/patient/patient';
import { MemberService } from '@app-services/patient/member';
import { PaymentService } from '@app-services/payment/payment';
import { AuthService } from '@app-services/auth/auth';
import { AppointmentService } from '@app-services/appointment/appointment';
import { DoctorService } from '@app-services/doctor/doctor';


// Various mock services
import { PatientMockService } from '@app/mock_services/patient/patient_mock';
import { MemberMockService } from '@app/mock_services/patient/member_mock';
import { AuthMockService } from '@app/mock_services/auth/auth_mock';
import { AppointmentMockService } from '@app/mock_services/appointment/appointment-mock';
import { DoctorMockService } from '@app/mock_services/doctor/doctor-mock';

import { AbstractAuthService } from "@app-services/auth/abstract_auth";
import { AbstractPatientService } from "@app-services/patient/abstract_patient";
import { AbstractMemberService } from "@app-services/patient/abstract_member";
import { AbstractAppointmentService } from "@app-services/appointment/abstract-appointment";
import { AbstractDoctorService } from "@app-services/doctor/abstract-doctor";


let allServices = {};
let mock = true;

if (mock === true) {
	allServices = {
		'PatientService': PatientMockService,
		'AuthService': AuthMockService,
		'MemberService': MemberMockService,
		'AppointmentService': AppointmentMockService,
		'DoctorService': DoctorMockService
	}	
} else {
	allServices = {
		'PatientService': PatientService,
		'AuthService': AuthService,
		'MemberService': MemberService,
		'AppointmentService': AppointmentService,
		'DoctorService': DoctorService
	}
}



export function provideSettings(storage: Storage) {
	/**
	 * The Settings provider takes a set of default settings for your app.
	 *
	 * You can add new settings options at any time. Once the settings are saved,
	 * these values will not overwrite the saved values (this can be done manually if desired).
	 */
	return new Settings(storage, {
		option1: true,
		option2: 'Ionitron J. Framework',
		option3: '3',
		option4: 'Hello'
	});
}

@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		CommonModule,
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot()
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
	],
	providers: [
		CommonModule,
		Api,
		PaymentService,
		StatusBar,
		{ provide: AbstractPatientService, useClass: allServices['PatientService'] },
		{ provide: AbstractMemberService, useClass: allServices['MemberService'] },
		{ provide: AbstractAuthService, useClass: allServices['AuthService'] },
		{ provide: AbstractAppointmentService, useClass: allServices['AppointmentService'] },
		{ provide: AbstractDoctorService, useClass: allServices['DoctorService'] },
		{ provide: Settings, useFactory: provideSettings, deps: [Storage] },
		// Keep this to enable Ionic's runtime error handling during development
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		File,
		FilePath
	]
})
export class AppModule { }
