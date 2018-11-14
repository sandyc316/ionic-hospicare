import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

import { Injectable } from '@angular/core';
import { Http, Headers,  RequestOptions, URLSearchParams } from '@angular/http';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
	url: string = 'http://0.0.0.0:3000';
	profile: any;

	constructor(public http: Http, public type: string) {
		this.setEndpoint(type);
	}

	setEndpoint(type: string) {
		if(type === 'Patient')
			this.url = '/api/patient/';
		else if(type === 'Doctor')
			this.url = '/api/doctor/';
		else if(type === 'Appointment')
			this.url = '/api/appointment/';
		else if(type === 'Report')
			this.url = '/api/report/';
		else if(type === 'Appointment_At_Home')
			this.url = '/api/appointment-at-home/';
	}

	doHeaders(data: any = null) {
		let headers;
		if (!this.profile && 'profile' in localStorage) {
			this.profile = JSON.parse(localStorage['profile']);
		}
		if (this.profile && (!data || !data.username)) {
		  let basictoken;
		  
		  if ('base_token' in localStorage) {
		    basictoken = localStorage['base_token'];
		  } else {
		    basictoken = btoa(this.profile.username + ':' + this.profile.password);
		  }
		  
		  headers = new Headers({
		    'Content-Type': 'application/json',
		    'Authorization': 'Basic ' + basictoken
		  });
		} else if (data) {
		  
		  headers = new Headers({
		    'Content-Type': 'application/json',
		    'Authorization': 'Basic ' + btoa(data.username + ':' + data.password)
		  });
		} else {
		  
		  headers = new Headers({ 'Content-Type': 'application/json' });
		}
		
		return headers;
	}

	doGet(endpoint: string, params?: any, options?: RequestOptions) {
		const headers = this.doHeaders(null);
		
		if (!options) {
			options = new RequestOptions();
		}

		// Support easy query params for GET requests
		if (params) {
			let p = new URLSearchParams();
			for (let k in params) {
				p.set(k, params[k]);
			}
			// Set the search field if we have params and don't already have
			// a search field set in options.
			options.search = !options.search && p || options.search;
		}

		options.headers = headers;
	  	
	  	return this.http.get(this.url + endpoint, options)
	  	.map(res => res.json())
	  	.share();
	}

	doPost(endpoint: string, data: any, files: any = null) {
		const headers = this.doHeaders(data);  // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
		
		if (files) { headers._headers.delete('content-type'); }
		if (!data) { data = {}; }

		let formData;

		if (files) {
			formData = new FormData();
			
			if (files.length === 1) {
				formData.append('uploads', files[0], files[0].name);
			} else {
				for (let i = 0; i < files.length; i++) {
					formData.append('uploads[]', files[i], files[i].name);
				}
			}
		} else {
			formData = JSON.stringify(data);
		}

		return this.http.post(this.url + endpoint, formData, { headers: headers }).share();
	}


	doPut(endpoint: string, data: any = null) {
		return new Promise((resolve, reject) => {
			const headers = this.doHeaders(data);
			if (!data) { data = {}; }

			return this.http.put(this.url + endpoint, JSON.stringify(data), { headers: headers }).share();
		});
	}

	doDelete(endpoint: string) {
		return new Promise((resolve, reject) => {
		  	const headers = this.doHeaders();
		  
		  	return this.http.delete(this.url + endpoint, { headers: headers }).share();
		});
	}
}
