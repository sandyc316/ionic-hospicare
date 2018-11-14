import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Api } from '../api';
import { AbstractAuthService } from "@app-services/auth/abstract_auth";


@Injectable()
export class AuthService extends AbstractAuthService {

	constructor(public http: Http,
				public api: Api) {
		super();
	}

	login(email: string, password: string): Observable<any> {

		return ;
	}

	register(email: string, password: string, firstname: string, lastname: string): Observable<any> {

		return ;
	}

}