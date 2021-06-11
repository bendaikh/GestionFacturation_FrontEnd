import { Injectable } from '@angular/core';
import {CommandeType} from '../model/commande-type.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeTypeService {
  public dataSource: Array<CommandeType>;
  getCommandeType() {
    this.http.get<Array<CommandeType>>('http://localhost:8041/gestionFacturation/commandetype/').subscribe(
      data => {
        this.dataSource = data;
        console.log(this.dataSource);
      },
      error => {
        console.log('I am sorry i am doing some problem that i will resolce later');
      }
    );
  }
  constructor(private http: HttpClient) { }
}
