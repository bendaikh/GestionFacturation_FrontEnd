import { Injectable } from '@angular/core';
import {Paiment} from '../model/paiment.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaimentService {
// tslint:disable-next-line:variable-name
  private _urlBase = 'http://localhost:8041';
  // tslint:disable-next-line:variable-name
  private  _url = '/getionfacturation/paiment';
  // tslint:disable-next-line:variable-name
  private _paiment: Paiment;
  // tslint:disable-next-line:variable-name
  private _paiments: Array<Paiment>;
  // tslint:disable-next-line:variable-name
  private _index: number;

  public deleteByReference(index: number, paiment: Paiment) {
    const link = this._urlBase + this._url + '/reference/' + paiment.reference;
    console.log('link !!!!!! ' + link);
    this.http.delete<number>(link).subscribe(
      data => {
        this.paiments.splice(index, 1);
        console.log('ha data ' + data );
      }
    );
  }
  public update(index: number, paiment: Paiment) {
    this.paiment = this.ClonePaiment(paiment);
    this._index = index;
  }
  public save() {
    if (this.paiment.id == null) {
      this.http.post<Array<Paiment>>(this._urlBase + this._url + '/', this.paiment).subscribe(
        data => {
          // @ts-ignore
          if (data > 0) {
            const M = this.ClonePaiment(this.paiment);
            console.log(M);
            this.findAll();
          } else {
            alert('error !!!!!!!!!!!' + data);
          }
        }
      ); } else {
      this.http.put(this._urlBase + this._url + '/' , this.paiment).subscribe(
        data => {
          this.paiments[this._index] = this.paiment;
        }
      );
    }
    this.paiment = null;
  }

  public findAll() {
    this.http.get<Array<Paiment>>(this._urlBase + this._url + '/').subscribe(
      data => {
        this.paiments = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }
  get paiment(): Paiment {
    if (this._paiment == null) {
      this._paiment = new Paiment();
    }
    return this._paiment;
  }

  set paiment(value: Paiment) {
    this._paiment = value;
  }

  get paiments(): Array<Paiment> {
    if (this._paiments == null) {
      this._paiments = new Array<Paiment>();
    }
    return this._paiments;
  }

  set paiments(value: Array<Paiment>) {
    this._paiments = value;
  }
  constructor(private http: HttpClient) { }
  public ClonePaiment(paiment: Paiment) {
    const  myClone = new Paiment();
    myClone.id = paiment.id;
    myClone.reference = paiment.reference;
    myClone.datePaiment = paiment.datePaiment;
    myClone.dateCreation = paiment.dateCreation;
    myClone.montant = paiment.montant;
    myClone.reste = paiment.reste;
    myClone.commentaire = paiment.commentaire;
    return myClone;
  }
}

