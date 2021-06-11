import { Injectable } from '@angular/core';
import {Expedition} from '../model/expedition.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {

  dataSource: Array<Expedition>;

  constructor(private http: HttpClient) { }
  getExpeditions() {
    this.http.get<Array<Expedition>>('http://localhost:8041/gestionFacturation/expedition/').subscribe(
      data => {
        console.log('here is the result list of the expedition array:');
        this.dataSource = data;
        console.log(this.dataSource);
      },
      error => {
        console.log('there is some problem that is:' + error);
      }
    );
  }
}
