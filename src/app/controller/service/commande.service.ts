import { Injectable } from '@angular/core';
import {CommandeSaveSuccessComponent} from '../../view/commande/commande-save-success/commande-save-success.component';
import {Commande} from '../model/commande.model';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {DeviseService} from './devise.service';
import {Delivery} from '../model/delivery.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  public index: number;
  get deliveries(): Array<Delivery> {
    if (this._deliveries == null) {
      this._deliveries = new Array<Delivery>();
    }
    return this._deliveries;
  }


  get deliverie(): Delivery {
    if (this._deliverie == null) {
      this._deliverie = new Delivery();
    }
    return this._deliverie;
  }


  get commande(): Commande {
    if (this._commande == null) {
      this._commande = new Commande();
    }
    return this._commande;
  }
  constructor(private http: HttpClient, public dialog: MatDialog, private devisService: DeviseService) { }
  private _commande: Commande;
  private _deliverie: Delivery;
  private _deliveries: Array<Delivery>;
  saveCommande() {
    this.commande.deliveries = this.deliveries;
    this.http.post<number>('http://localhost:8041/gestionFacturation/commande/', this.commande).subscribe(
      data => {
        console.log(this.commande.deliveries);
      }, error => {
        console.log(error);
      }
    );
    this.success();
  }

  getCommande() {
    this.http.get<Commande>('http://localhost:8041/gestionFacturation/commande/reference/' + this.commande.reference).subscribe(
      data => {
        console.log('here is the result' + data);
      }, err => {
        console.log('here is the problem' + err);
      }
    );
  }
  addLivraison() {
    if (this.deliverie.id == null) {
      this.deliverie.id = this.deliveries.length + 1;
      this.deliveries.push(this.clone(this.deliverie));
      console.log(this._deliverie);
      this._deliverie = null;
    } else {
      this.deliveries[this.index] = this.clone(this.deliverie);
    }
  }

  private success() {
    const dialogRef = this.dialog.open(CommandeSaveSuccessComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  private clone(livraison: Delivery){
    let pi = new Delivery();
    pi.id = livraison.id;
    pi.reference = livraison.reference;
    pi.delivery_date = livraison.delivery_date;
    pi.cmr_Shipping_Adress = livraison.cmr_Shipping_Adress;
    pi.cmr_Number = livraison.cmr_Number;
    pi.cmr_Shipper = livraison.cmr_Shipper;
    pi.cmr_Commodity = livraison.cmr_Commodity;
    pi.creation_date = livraison.creation_date;
    pi.cmr_Recipient_Address = livraison.cmr_Recipient_Address;
    return pi;
  }

  public update(i: number, d: Delivery) {
    this._deliverie = this.clone(d);
    this.index = i;
  }
}
