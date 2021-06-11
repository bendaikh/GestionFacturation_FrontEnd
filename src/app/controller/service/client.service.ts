import { Injectable } from '@angular/core';
import {Client} from '../model/client.model';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {SuccessComponent} from '../../view/success/success.component';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _client: Client;
  private _dataSource2: Array<Client>;

  get dataSource() {
    return this._dataSource2;
  }
  getClients() {
    this.http.get<Array<Client>>('http://localhost:8041/gestionFacturation/client/').subscribe(
      data => {
        this._dataSource2 = data;
        console.log('this is it');
        console.log(this.dataSource);

      },
      err => {
        alert(err);
      }
    );
  }

  get client(): Client {
    if (this._client == null) {
      this._client = new Client();
    }
    return this._client;
  }
  success() {
    const dialogRef = this.dialog.open(SuccessComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  constructor(private http: HttpClient , public dialog: MatDialog) { }


  saveClient() {
    this.http.post<number>('http://localhost:8041/gestionFacturation/client/', this.client).subscribe(

      data => {
        if (data > 0) {
          this.success();
        }
      }, erro => {
        alert('there is an error');
      }
    );
    this._client = {

      reference:"",
      nom:"",
      legal_form: "",
      adresse1:"",
      adresse2:"",
      zip_code:"",
      ville:"",
      pays:"",
      number1:"",
      number2:"",
      email:"",
    };
  }
}
