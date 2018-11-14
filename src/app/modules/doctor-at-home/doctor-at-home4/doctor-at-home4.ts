import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';

import { BasePage } from '@app-core/base-page';

import { AbstractAppointmentService } from "@app-services/appointment/abstract-appointment";

import { Appointment } from '@app-models/appointment/appointment';

@IonicPage()

@Component({
	selector: 'page-doctor-at-home4',
	templateUrl: 'doctor-at-home4.html'
})

export class DoctorAtHomePage4 extends BasePage {
	appointment: Appointment = new Appointment();
	member: any;
	address: any;
	visitDate: any;
	visitTime: any;
	visitReason: any;
	consultationFees: any;

	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController,
				public alertCtrl: AlertController,
				public appointmentService: AbstractAppointmentService
		) {
		super(navCtrl, toastCtrl);
	}

	ionViewDidLoad() {
		let visitDetails = localStorage.getItem('docVisitDetails');

		if(!visitDetails) {
			console.log("No doctor visit details found!");
			let alert = this.alertCtrl.create({
				title: 'Doctor visit',
				subTitle: 'No doctor visit details found! Please create one.',
				buttons: ['OK']
			});
			
			alert.present();

			this.navCtrl.push('DoctorAtHomePage1');
		} else {
			let details = JSON.parse(visitDetails);

			this.appointment.memberId = details.member.isMember ? details.member.id : null;
			this.appointment.addressId = details.address.id;
			this.appointment.patientId = details.address.patientId;
			this.appointment.emergency = false;
			this.appointment.reason = details.reason;
			this.appointment.status = "Pending";
			this.appointment.fixed_by = details.address.patientId;
			this.appointment.type = "DOC_AT_HOME";
			this.appointment.startsAt = details.date;
		

			this.member = details.member;
			this.address = details.address;
			this.visitTime = details.time;
			this.visitDate = details.date;
			this.visitReason = details.reason;
		}

		this.consultationFees = this.fetchConsultationFees();
	}


	fetchConsultationFees() {
		return "600";
	}

	goToMyHomePage() {
		this.navCtrl.push('PatientHomepage');
	}

	goToDoctorAtHomePage1() {
		this.navCtrl.push('DoctorAtHomePage1');
	}

	goToPaymentPage() {
		this.bookDocAtHomeAppointment();
	}

	bookDocAtHomeAppointment() {
		this.appointment.doctorId = '' + 1;
		this.appointment.fees = this.fetchConsultationFees();
		this.appointmentService.bookAnAppointment(this.appointment).subscribe((resp) => {
			if (!resp.errors) {
				this.navCtrl.push('DoctorAtHomeSummary', {
					appointmentId: resp.data.id
				});
				
			} else {
				let alert = this.alertCtrl.create({
					title: 'Doctor visit',
					subTitle: 'Could not proceed to create an appointment. Please try again.',
					buttons: ['OK']
				});
				
				alert.present();
			}
			
		}, (err) => {
			console.log("Booking appointment for doctor at home error", err);
		});	;
	}
}