import { Component, OnInit } from '@angular/core';
import {PaimentService} from '../../../controller/service/paiment.service';
import {Paiment} from '../../../controller/model/paiment.model';
import {PaimentMethode} from '../../../controller/model/paiment-methode.model';
import {FactureService} from '../../../controller/service/facture.service';
import {Facture} from '../../../controller/model/facture.model';
import {Commande} from '../../../controller/model/commande.model';
import {Client} from '../../../controller/model/client.model';

@Component({
  selector: 'app-paiment-create',
  templateUrl: './paiment-create.component.html',
  styleUrls: ['./paiment-create.component.css']
})
export class PaimentCreateComponent implements OnInit {

  constructor(private paimentService: PaimentService, private factureService: FactureService) { }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  public save() {
    this.paimentService.save();
  }
  ngOnInit() {
    this.paimentService.findAllPaimentMethode();
    this.factureService.findAllClient();
    this.findAllFacture();
  }
  public findFacturefindByReference(facture: Facture) {
    const fac = this.factureService.findFacturefindByReference(facture);
    fac.subscribe(
      data => {
        this.paiment.facture = data ;
      }
    );
    console.log(this.paiment.facture.total);
  }
    get paiments(): Array<Paiment> {
    return this.paimentService.paiments;
  }
  get client(): Client {
    return this.factureService.client;
  }
  get clients(): Array<Client> {
    return this.factureService.clients;
  }
  get commande(): Commande {
    return this.factureService.commande;
  }
  get paimentMethode(): PaimentMethode {
    return this.paimentService.paimentMethode;
  }
  set factures(value: Array<Facture>) {
    this.factureService.factures = value;
  }
  get factures(): Array<Facture> {
    return this.factureService.factures;
  }
  get paimentMethodes(): Array<PaimentMethode> {
    return this.paimentService.paimentMethodes;
  }
  public findAllFacture() {
    const fac = this.factureService.findAll();
    fac.subscribe(
      data => {
        // @ts-ignore
        this.factureService.factures = data;
      }
    );
  }
}
