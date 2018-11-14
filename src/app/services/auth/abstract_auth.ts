import { Observable } from "rxjs/Observable";


export abstract class AbstractAuthService {

	abstract login(email: string, password: string): Observable<any>;

	abstract register(email: string, password: string, firstname: string, lastname: string): Observable<any>;
}
