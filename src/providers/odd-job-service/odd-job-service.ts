import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

/*
  Generated class for the OddJobServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OddJobServiceProvider {
 API = 'http://localhost:8080';

  constructor(public http: Http) {
    console.log('Hello OddJobServiceProvider Provider');
  }
 public getOddJobType():Observable<any> {
    return this.http.get(this.API+'/jobs')
      .map((res:Response)=> res.json());
  }

}
