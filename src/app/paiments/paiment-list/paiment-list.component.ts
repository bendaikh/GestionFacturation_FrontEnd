import { Component, OnInit } from '@angular/core';
import {Paiment} from '../../controller/model/paiment.model';
import {PaimentService} from '../../controller/service/paiment.service';
// @ts-ignore
const ELEMENT_DATA: Paiment = [
  {reference: 'HU524', dateCreation: new Date('12-10-2020'),  montant: 1383 , paimentStatut: 'Enregistré', reste: 500}
];
@Component({
  selector: 'app-paiment-list',
  templateUrl: './paiment-list.component.html',
  styleUrls: ['./paiment-list.component.css']
})

export class PaimentListComponent implements OnInit {

  constructor(private paimentService: PaimentService) { }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['reference', 'dateCreation' , 'client' , 'montant' , 'paimentStatut' , 'facture' , 'factureStatut' , 'reste' , 'action'];
  dataSource = ELEMENT_DATA;
  get paiments(): Array<Paiment> {
    return this.paimentService.paiments;
  }
  public deleteByReference(index: number, paiment: Paiment) {
    this.paimentService.deleteByReference(index, paiment);
  }
  public update(index: number, paiment: Paiment) {
    this.paimentService.update(index, paiment);
  }
    ngOnInit() {
    this.paimentService.findAll();
  }

}
