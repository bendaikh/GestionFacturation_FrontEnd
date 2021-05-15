import { Injectable } from '@angular/core';
import {Facture} from '../model/facture.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
// tslint:disable-next-line:variable-name
  private _urlBase = 'http://localhost:8041';
  // tslint:disable-next-line:variable-name
  private  _url = '/getionfacturation/facture';
  // tslint:disable-next-line:variable-name
  private _facture: Facture;
  // tslint:disable-next-line:variable-name
  private _factures: Array<Facture>;
  // tslint:disable-next-line:variable-name
  private _index: number;

  public deleteByReference(index: number, facture: Facture) {
    const link = this._urlBase + this._url + '/reference/' + facture.reference;
    console.log('link !!!!!! ' + link);
    this.http.delete<number>(link).subscribe(
      data => {
        this.factures.splice(index, 1);
        console.log('ha data ' + data );
      }
    );
  }
  public update(index: number, facture: Facture) {
    this.facture = this.CloneFacture(facture);
    this._index = index;
  }
  public save() {
    if (this.facture.id == null) {
      this.http.post<Array<Facture>>(this._urlBase + this._url + '/', this.facture).subscribe(
        data => {
          // @ts-ignore
          if (data > 0) {
            const M = this.CloneFacture(this.facture);
            console.log(M);
            this.findAll();
          } else {
            alert('error !!!!!!!!!!!' + data);
          }
        }
      ); } else {
      this.http.put(this._urlBase + this._url + '/' , this.facture).subscribe(
        data => {
          this.factures[this._index] = this.facture;
        }
      );
    }
    this.facture = null;
  }
  // @ts-ignore
  public findAll(): Facture {
    this.http.get<Array<Facture>>(this._urlBase + this._url + '/').subscribe(
      data => {
        this.factures = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  get facture(): Facture {
    if (this._facture == null) {
      this._facture = new Facture();
    }
    return this._facture;
  }

  set facture(value: Facture) {
    this._facture = value;
  }

  get factures(): Array<Facture> {
    if (this._factures == null) {
      this._factures = new Array<Facture>();
    }
    return this._factures;
  }

  set factures(value: Array<Facture>) {
    this._factures = value;
  }

  constructor(private http: HttpClient) { }

  private CloneFacture(facture: Facture) {
    const myClone = new Facture();
    myClone.id = facture.id;
    myClone.reference = facture.reference;
    myClone.dateCreation = facture.dateCreation;
    myClone.dateEcheance = facture.dateEcheance;
    myClone.prix = facture.prix;
    myClone.quantite = facture.quantite;
    myClone.totalht = facture.totalht;
    myClone.remise_val = facture.remise_val;
    myClone.remise_pourcentage = facture.remise_pourcentage;
    myClone.tva_val = facture.tva_val;
    myClone.tva_pourcentage = facture.tva_pourcentage;
    myClone.totalHtnet = facture.totalHtnet;
    myClone.cdtpaiment = facture.cdtpaiment;
    myClone.notes = facture.notes;
    myClone.commentaire = facture.commentaire;
    myClone.transmise = facture.transmise;
    myClone.en_litige = facture.en_litige;

    return myClone;
  }

}
