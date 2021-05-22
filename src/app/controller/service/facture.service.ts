import { Injectable } from '@angular/core';
import {Facture} from '../model/facture.model';
import {HttpClient} from '@angular/common/http';
import {FactureEtat} from '../model/facture-etat.model';
import {FactureStatut} from '../model/facture-statut.model';
import {Commande} from '../model/commande.model';
import {Devis} from '../model/devis.model';
import {Currency} from '../model/currency.model';

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
  // tslint:disable-next-line:variable-name
  private _factureEtats: Array<FactureEtat>;
  // tslint:disable-next-line:variable-name
  private _factureStatuts: Array<FactureStatut>;
  // tslint:disable-next-line:variable-name
  private _factureEtat: FactureEtat;
  // tslint:disable-next-line:variable-name
  private _factureStatut: FactureStatut;
  // tslint:disable-next-line:variable-name
  private _commande: Commande;
  // tslint:disable-next-line:variable-name
  private _commandes: Array<Commande>;
  // tslint:disable-next-line:variable-name
  private _devis: Devis;
  // tslint:disable-next-line:variable-name
  private _listeDevis: Array<Devis>;
  // tslint:disable-next-line:variable-name
  private _currency: Currency;
  // tslint:disable-next-line:variable-name
  private _currencys: Array<Currency>;

  get commande(): Commande {
    if (this._commande == null) {
      this._commande = new Commande();
    }
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }

  get commandes(): Array<Commande> {
    if (this._commandes == null) {
      this._commandes = new Array<Commande>();
    }
    return this._commandes;
  }

  set commandes(value: Array<Commande>) {
    this._commandes = value;
  }

  get devis(): Devis {
    if (this._devis == null) {
      this._devis = new Devis();
    }
    return this._devis;
  }

  set devis(value: Devis) {
    this._devis = value;
  }

  get listeDevis(): Array<Devis> {
    if (this._listeDevis == null) {
      this._listeDevis = new Array<Devis>();
    }
    return this._listeDevis;
  }

  set listeDevis(value: Array<Devis>) {
    this._listeDevis = value;
  }

  get currency(): Currency {
    if (this._currency == null) {
      this._currency = new Currency();
    }
    return this._currency;
  }

  set currency(value: Currency) {
    this._currency = value;
  }

  get currencys(): Array<Currency> {
    if (this._currencys == null) {
      this._currencys = new Array<Currency>();
    }
    return this._currencys;
  }

  set currencys(value: Array<Currency>) {
    this._currencys = value;
  }

  get factureEtat(): FactureEtat {
    if (this._factureEtat == null) {
      // @ts-ignore
      this._factureEtat = new FactureEtat();
    }
    return this._factureEtat;
  }

  set factureEtat(value: FactureEtat) {
    this._factureEtat = value;
  }

  get factureStatut(): FactureStatut {
    if (this._factureStatut == null ) {
      this._factureStatut = new FactureStatut();
    }
    return this._factureStatut;
  }

  set factureStatut(value: FactureStatut) {
    this._factureStatut = value;
  }

  get factureEtats(): Array<FactureEtat> {
    if (this._factureEtats == null) {
      this._factureEtats = new Array<FactureEtat>();
    }
    return this._factureEtats;
  }

  set factureEtats(value: Array<FactureEtat>) {
    this._factureEtats = value;
  }

  get factureStatuts(): Array<FactureStatut> {
    if (this._factureStatuts == null) {
      this._factureStatuts = new Array<FactureStatut>();
    }
    return this._factureStatuts;
  }

  set factureStatuts(value: Array<FactureStatut>) {
    this._factureStatuts = value;
  }

  public deleteByReference(index: number, facture: Facture) {
    console.log(facture);
    console.log(index);
    const link = this._urlBase + this._url + '/reference/' + facture;
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
      console.log(this.facture.factureEtat);
      console.log(this.facture.factureStatut);
      console.log(this.facture);
    //  this.facture.factureEtat.id = this.factureEtat.id;
    //  this.facture.factureStatut.id = this.factureStatut.id;
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
   // this.facture = null;
  }
  public findAll() {
   return  this.http.get(this._urlBase + this._url + '/');
  }
  public findAllFactureEtat() {
   this.http.get<Array<FactureEtat>>('http://localhost:8041/getionfacturation/facture_etat/').subscribe(
     data => {
       this.factureEtats = data;
     }
   );
  }
  public findAllFactureStatut() {
    return this.http.get<Array<FactureStatut>>('http://localhost:8041/getionfacturation/facture_statut/').subscribe(
      data => {
        this.factureStatuts = data;
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
    myClone.dateEchaence = facture.dateEchaence;
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
    myClone.factureEtat = facture.factureEtat;
    myClone.factureStatut = facture.factureStatut;
    myClone.commentaire = facture.commentaire;
    return myClone;
  }

}
