import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../../controller/service/facture.service';
import {Facture} from '../../../controller/model/facture.model';

@Component({
  selector: 'app-facture-detail',
  templateUrl: './facture-detail.component.html',
  styleUrls: ['./facture-detail.component.css']
})
export class FactureDetailComponent implements OnInit {

  constructor(private  factureService: FactureService) { }
  get facture(): Facture {
    return this.factureService.facture;
  }
  get factures(): Array<Facture> {
    return this.factureService.factures;
  }
  ngOnInit() {
  }

}
