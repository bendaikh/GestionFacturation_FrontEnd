import { Component, OnInit } from '@angular/core';
import {PaimentService} from '../../../controller/service/paiment.service';
import {Paiment} from '../../../controller/model/paiment.model';
import {PaimentMethode} from '../../../controller/model/paiment-methode.model';
import {FactureService} from '../../../controller/service/facture.service';
import {Facture} from '../../../controller/model/facture.model';
import {Commande} from '../../../controller/model/commande.model';
import {Client} from '../../../controller/model/client.model';
import {PaimentStatut} from '../../../controller/model/paiment-statut.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-paiment-create',
  templateUrl: './paiment-create.component.html',
  styleUrls: ['./paiment-create.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class PaimentCreateComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private paimentService: PaimentService, private factureService: FactureService) { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  get paimentStatut(): PaimentStatut {
    return this.paimentService.paimentStatut;
  }
  indeterminate = false;
  onchange() {

  }
  etatPaiment(paiment: Paiment) {
    // tslint:disable-next-line:triple-equals
   if (paiment.comptabilise == true ) {
     return paiment.paimentStatut = 'Comptabilisé';
     // tslint:disable-next-line:triple-equals
   } else if (paiment.enregistre == true) {
     return  paiment.paimentStatut = 'Enregisté';
   } else {
     // tslint:disable-next-line:triple-equals
     return ' ';
   }
  }
  get paimentStatuts(): Array<PaimentStatut> {
    return this.paimentService.paimentStatuts;
  }
  public save() {
    console.log(this.paiment);
    this.paimentService.save();
  }
  ngOnInit() {
    this.paimentService.findAllPaimentMethode();
    this.factureService.findAllClient();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
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
