import { Component, OnInit } from '@angular/core';
import {Facture} from '../../controller/model/facture.model';
import {FactureService} from '../../controller/service/facture.service';

// @ts-ignore
const ELEMENT_DATA: Facture = [
  {reference: 'ter263', dateCreation: new Date('12-10-2020'), dateEcheance: new Date('12-11-2020'), totalHtnet: 1383 }
];


@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {

  constructor(private factureService: FactureService) { }
  get facture(): Facture {
    return this.factureService.facture;
  }
  get factures(): Array<Facture> {
    return this.factureService.factures;
  }
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['reference', 'dateCreation' , 'dateEcheance' , 'client' , 'totalHtnet' , 'etat' , 'statut', 'commande' , 'action'];
    dataSource = ELEMENT_DATA;
  public deleteByReference(index: number, facture: Facture) {
    this.factureService.deleteByReference(index, facture);
  }
  public update(index: number, facture: Facture) {
    this.factureService.update(index, facture);
  }
  ngOnInit() {
    this.factureService.findAll();
  }



}
