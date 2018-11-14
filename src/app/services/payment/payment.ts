import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Api } from '../api';

@Injectable()
export class PaymentService extends Api {

	JWTtoken: any;
	app: any;
	url: any;
	paymentURL: string;

	constructor(public http: Http) {
		super(http, "Payment");
	}

	getCredentials(details) {

		return this.doGet(this.paymentURL+'pgdirect', details);
	}

	paytmCall(details) {
		
		var headers = new Headers();
	    headers.append('Access-Control-Allow-Origin' , '*');
	    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
	    headers.append('Accept','application/json');
	    headers.append('content-type','application/json');
	    let options = new RequestOptions({ headers:headers,withCredentials: true});

		return this.doPost( 'https://pguat.paytm.com/oltp-web/processTransaction' , details, options);
	}

}