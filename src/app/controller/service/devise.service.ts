import { Injectable } from '@angular/core';
import {Devise} from '../model/devise.model';
import {MatDialog} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {DeviseSuccessComponent} from '../../view/devise/devise-success/devise-success.component';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  private _devise: Devise;
  private _dataSource: Array<Devise>;

  get devise(): Devise {
    if (this._devise == null) {
      this._devise = new Devise();
    }
    return this._devise;
  }
  success() {
    const dialogRef = this.dialog.open(DeviseSuccessComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  get dataSource() {
    if (this._dataSource) {
      return this._dataSource;
    }
  }
  getDevise() {
    this.http.get<Array<Devise>>('http://localhost:8041/gestionFacturation/currency/').subscribe(
      data => {
        this._dataSource = data;
        console.log('it has been used from the html side');
        console.log(this._dataSource);
      }, err => {
        alert('there is some error' + err);
      }
    );
  }
  saveDevise() {
    this.http.post<number>('http://localhost:8041/gestionFacturation/currency/', this.devise).subscribe(
      data => {
        if (data > 0)
        {
          this.success();
        }
        this._devise = {
          nom: '',
          code: '',
          symbol: ''
        };
      },
      err => {
        alert('there is some error that has been marked');
      }
    );
  }
}
