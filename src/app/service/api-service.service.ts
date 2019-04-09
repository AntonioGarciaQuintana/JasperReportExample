import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Http, RequestMethod, ResponseContentType } from '@angular/http';



@Injectable()
export class ApiService {

    urlBacked = environment.urlBackend;

    constructor(private httpClient: HttpClient, private http: Http) {
    }

    getReport(): Observable<any> {
        return this.httpClient.get<any>(`${this.urlBacked}/report`);
    }

    download() {
        const httpOptions = {
            responseType: 'arraybuffer' as 'json'
        };

        return this.httpClient.get<any>(`${this.urlBacked}/report`, httpOptions);
    }
}
