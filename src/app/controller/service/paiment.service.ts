import { Injectable } from '@angular/core';
import {Paiment} from '../model/paiment.model';
import {HttpClient} from '@angular/common/http';
import {PaimentMethode} from '../model/paiment-methode.model';
import {Commande} from '../model/commande.model';
import {Client} from '../model/client.model';

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
  // tslint:disable-next-line:variable-name
  private _paimentMethode: PaimentMethode;
  // tslint:disable-next-line:variable-name
  private _paimentMethodes: Array<PaimentMethode>;
  // tslint:disable-next-line:variable-name
  private _commande: Commande;
  // tslint:disable-next-line:variable-name
  private _client: Client;
  get client(): Client {
    if (this._client == null) {
      this._client = new Client();
    }
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }
  get commande(): Commande {
    if (this._commande == null) {
      this._commande = new Commande();
    }
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }

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
   return this.http.get(this._urlBase + this._url + '/') ;
  }
  public findAllPaimentMethode() {
     this.http.get<Array<PaimentMethode>>(this._urlBase + '/getionfacturation/paiment_methode/').subscribe(
       data => {
         this.paimentMethodes = data;
       }
     );
  }

  get paimentMethode(): PaimentMethode {
    if (this._paimentMethode == null) {
      this._paimentMethode  = new PaimentMethode();
    }
    return this._paimentMethode;
  }

  set paimentMethode(value: PaimentMethode) {
    this._paimentMethode = value;
  }

  get paimentMethodes(): Array<PaimentMethode> {
    if (this._paimentMethodes == null) {
      this._paimentMethodes = new Array<PaimentMethode>();
    }
    return this._paimentMethodes;
  }

  set paimentMethodes(value: Array<PaimentMethode>) {
    this._paimentMethodes = value;
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
    myClone.comptabilise = paiment.comptabilise;
    myClone.commentaire = paiment.commentaire;
    myClone.paimentMethode = paiment.paimentMethode;
    myClone.paimentStatut = paiment.paimentStatut;
    return myClone;
  }
}

