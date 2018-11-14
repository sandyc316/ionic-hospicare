import { Observable } from "rxjs/Observable";


export abstract class AbstractDoctorService {

	abstract getDocDetails(doctorId: string): Observable<any>;
}
