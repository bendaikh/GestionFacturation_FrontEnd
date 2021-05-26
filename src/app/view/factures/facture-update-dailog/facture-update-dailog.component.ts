import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FactureService} from '../../../controller/service/facture.service';
import {Facture} from '../../../controller/model/facture.model';
import {Paiment} from '../../../controller/model/paiment.model';
import {Commande} from '../../../controller/model/commande.model';
import {Delivery} from '../../../controller/model/delivery.model';
import {MatTableDataSource} from '@angular/material/table';
import {FactureEtat} from '../../../controller/model/facture-etat.model';
import {FactureStatut} from '../../../controller/model/facture-statut.model';
import {Devis} from '../../../controller/model/devis.model';
import {Currency} from '../../../controller/model/currency.model';
import {Client} from '../../../controller/model/client.model';
import {DeviseCreateComponent} from '../../devise/devise-create/devise-create.component';
import {FindDeviseComponent} from '../../devise/find-devise/find-devise.component';

@Component({
  selector: 'app-facture-update-dailog',
  templateUrl: './facture-update-dailog.component.html',
  styleUrls: ['./facture-update-dailog.component.css']
})
export class FactureUpdateDailogComponent implements OnInit {
  constructor(private factureService: FactureService, public dailog: MatDialog, public dialogRef: MatDialogRef<FactureService>) { }
  get facture(): Facture {
    return this.factureService.facture;
  }
  get factureEtats(): Array<FactureEtat> {
    return this.factureService.factureEtats;
  }
  get factureStatuts(): Array<FactureStatut> {
    return this.factureService.factureStatuts;
  }
  get factureEtat(): FactureEtat {
    return this.factureService.factureEtat;
  }
  get factureStatut(): FactureStatut {
    return this.factureService.factureStatut;
  }
  get commande(): Commande {
    return this.factureService.commande;
  }
  get commandes(): Array<Commande> {
    return this.factureService.commandes;
  }
  get devis(): Devis {
    return this.factureService.devis;
  }


  get listeDevis(): Array<Devis> {
    return this.factureService.listeDevis;
  }

  get currency(): Currency {
    return this.factureService.currency;
  }
  get currencys(): Array<Currency> {
    return this.factureService.currencys;
  }
  get client(): Client {
    return this.factureService.client;
  }
  get clients(): Array<Client> {
    return this.factureService.clients;
  }
  get factures(): Array<Facture> {
    return this.factureService.factures;
  }
  ELEMENT_DATA2: Delivery[];
  // tslint:disable-next-line:max-line-length
  dispalyedColumns2: string[] = ['reference', 'creation_date', 'delivery_date', 'cmr_Commodity', 'cmr_Shipping_Adress', 'cmr_Recipient_Address'];
  dataSource2 = new MatTableDataSource<Delivery>(this.ELEMENT_DATA2) ;
  display = false;
  creatDevise() {
    const dialogRef = this.dailog.open(DeviseCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  findDevise() {
    const dialogRef = this.dailog.open(FindDeviseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  public save() {
    this.factureService.save();
  }
  montant(facture: Facture) {
    // tslint:disable-next-line:triple-equals
    if (facture.prix == 0 && facture.quantite == 0) {
      return facture.totalHt = 0;
    }
    return facture.totalHt = this.facture.prix * this.facture.quantite;
  }
  ngOnInit() {
    this.factureService.findAllFactureEtat();
    this.factureService.findAllFactureStatut();
    this.factureService.findAllCommande();
    this.factureService.findAllClient();
    this.factureService.findAllCurrencies();
    this.factureService.findAllDevis();
    this.factureService.findAll();
    // @ts-ignore
    this.findLivraisonByCommandeReference();
  }
  public findLivraisonByCommandeReference(commande: Commande) {
    console.log(commande);
    const resp = this.factureService.findLivraisonByCommandeReference(commande);
    resp.subscribe(report => this.dataSource2.data = report as Delivery[]);
  }

}
