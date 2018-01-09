import { Injectable } from '@angular/core';
import { LabBean } from './LabBean';
// Import Http & Response from angular HTTP module
import { Http, Response } from '@angular/http';
// Import Observable from rxjs/Observable
import { Observable } from 'rxjs/Observable';
// Import the map operator
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class LabService {

    // Inject Angular http service
    constructor(private _http: Http) { }

    // Notice the method return type is Observable<IEmployee[]>
    getLabs(): Observable<LabBean[]> {
        // To convert Observable<Response> to Observable<IEmployee[]>
        // we are using the map operator
      
            
        return this._http.get('http://13.58.105.55:8080/api/cities/getall')
           .map((response: Response) =>  <LabBean[]>response.json().data).catch(this.handleError);
    }
    handleError(error: Response){
    console.error(error);
    return Observable.throw(error);
    }
}
