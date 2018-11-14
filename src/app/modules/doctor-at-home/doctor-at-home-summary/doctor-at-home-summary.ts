import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController, NavParams} from 'ionic-angular';

import { BasePage } from '@app-core/base-page';

import { AbstractAppointmentService } from "@app-services/appointment/abstract-appointment";
import { AbstractDoctorService } from "@app-services/doctor/abstract-doctor";
import { AbstractPatientService } from "@app-services/patient/abstract_patient";

import { Appointment } from '@app-models/appointment/appointment';
import { Doctor } from '@app-models/doctor/doctor';
import { Address } from '@app-models/patient/address';

@IonicPage()

@Component({
	selector: 'page-doctor-at-home-summary',
	templateUrl: 'doctor-at-home-summary.html'
})

export class DoctorAtHomeSummary extends BasePage {
	appointment: Appointment = new Appointment();
	doctor: Doctor = new Doctor();
	address: Address = new Address();
	appointmentId: string;
	member: any;

	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController,
				public navParams: NavParams,
				public alertCtrl: AlertController,
				public appointmentService: AbstractAppointmentService,
				public doctorService: AbstractDoctorService,
				public patientService: AbstractPatientService
		) {
		super(navCtrl, toastCtrl);

		if (navParams.get('appointmentId')) {
			this.appointmentId = navParams.get('appointmentId');
		}
	}

	getAppointment(appointmentId) {
		this.appointmentService.getAppointment(appointmentId).subscribe((resp) => {
			if (!resp.errors) {
				this.appointment = resp.data.appointment;
				console.log("Appointment detaisls ", resp.data.appointment);

				this.getAddressDetails(this.appointment.addressId);
				this.getDoctorDetails(this.appointment.doctorId);

			} else {
				let alert = this.alertCtrl.create({
					title: 'Doctor visit',
					subTitle: resp.errors[0].message,
					buttons: ['OK']
				});
				
				alert.present();

				this.navCtrl.push('DoctorAtHomePage1');
			}
			
		}, (err) => {
			console.log("Booking appointment for doctor at home error", err);
		});	;
	}

	ionViewDidLoad() {
		this.getAppointment(this.appointmentId);
	}


	getAddressDetails(addressId) {
		this.patientService.getAddressById(this.appointment.patientId, addressId).subscribe((resp) => {
			if (!resp.errors) {
				this.address = resp.data.address;
				console.log("Address details are ", resp.data.address);
				
			} else {
				console.log(resp.errors[0].message);
			}
			
		}, (err) => {
			console.log("Fetching user addresses error", err);
		});	
	}

	getDoctorDetails(doctorId) {
		this.doctorService.getDocDetails(doctorId).subscribe((resp) => {
			if (!resp.errors) {
				console.log("Doctor details are ", resp.data.doctor);
				this.doctor = resp.data.doctor;

			} else {
				console.log(resp.errors[0].message);
			}
			
		}, (err) => {
			console.log("Booking appointment for doctor at home error", err);
		});	;
	}

	goToMyHomePage() {
		this.navCtrl.push('PatientHomepage');
	}

	goToDoctorAtHomePage1() {
		this.navCtrl.push('DoctorAtHomePage1');
	}

	goToPaymentPage() {
		this.navCtrl.push('PatientHomepage');
	}
}