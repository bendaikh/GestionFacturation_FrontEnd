import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../controller/service/facture.service';
import {Facture} from '../../controller/model/facture.model';
import {MatDialog} from '@angular/material';
import {PaimentDailogComponent} from '../../paiments/paiment-dailog/paiment-dailog.component';
import {Paiment} from '../../controller/model/paiment.model';
import {PaimentService} from '../../controller/service/paiment.service';
// @ts-ignore
const ELEMENT_DATA: Paiment = [
  {reference: 'HU524', datePaiment: new Date('12-10-2020'),  montant: 1383 , commentaire: 'Enveloppe', paimentMethode: 'Espéce'}
];
@Component({
  selector: 'app-facture-create',
  templateUrl: './facture-create.component.html',
  styleUrls: ['./facture-create.component.css']
})
export class FactureCreateComponent implements OnInit {

  constructor(private factureService: FactureService, public dailog: MatDialog, public paimentService: PaimentService ) { }
  get facture(): Facture {
    return this.factureService.facture;
  }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['datePaiment', 'paimentMethode' , 'montant' , 'commentaire' , 'reference' , 'comptabilise' , 'action'];
  dataSource = ELEMENT_DATA;
  public save() {
    this.factureService.save();
  }

  ngOnInit() {
  }
  openDialog() {
  this.dailog.open(PaimentDailogComponent);
  }
}
