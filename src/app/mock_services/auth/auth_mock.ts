import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import users_data from '@app/models/auth/data/users';
import { AbstractAuthService } from "@app-services/auth/abstract_auth";

@Injectable()
export class AuthMockService extends AbstractAuthService {
	static data = users_data.users;

	constructor() {
		super();
	}

	public login(email, password): Observable<any> {
		let result = AuthMockService.data.filter(user => user.email == email);
		
		if (result.length > 0) {
			if (result[0].password === password) {
				return Observable.of({data: result[0]});

			} else 
				return Observable.of({errors:[{"message": "Invalid credentials"}]});
		} else 
			return Observable.of({errors:[{"message": "No user found for the given email"}]}); 
	}

	public register(email, password, firstname, lastname): Observable<any> {
		let result = AuthMockService.data.filter(user => user.email == email);
		
		if (result.length > 0) { 
			return Observable.of({errors:[{"message": "User with the given email id already exists!"}]});
		}
		else 
			AuthMockService.data.push({email: email, password: password});
			return Observable.of({data:[], message: "Registration successfull!"}); 
	}
}
