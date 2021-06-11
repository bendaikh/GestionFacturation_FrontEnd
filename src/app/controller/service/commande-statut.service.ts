import { Injectable } from '@angular/core';
import {CommandeStatut} from '../model/commande-statut.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeStatutService {
  public dataSource2: Array<CommandeStatut>;

  constructor(private http: HttpClient) { }
  getCommandeStatut() {
    this.http.get<Array<CommandeStatut>>('http://localhost:8041/gestionFacturation/commandestatut/').subscribe(
      data => {
        this.dataSource2 = data;
        console.log(this.dataSource2);
      },
      error => {
        console.log('I am sorry i am doing some problem that i will resolce later');
      }
    );
  }
}
