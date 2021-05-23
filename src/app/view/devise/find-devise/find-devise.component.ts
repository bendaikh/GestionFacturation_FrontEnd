import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../../controller/service/facture.service';
import {Facture} from '../../../controller/model/facture.model';
import {Currency} from '../../../controller/model/currency.model';

@Component({
  selector: 'app-find-devise',
  templateUrl: './find-devise.component.html',
  styleUrls: ['./find-devise.component.css']
})
export class FindDeviseComponent implements OnInit {

  constructor(private factureService: FactureService) { }
  get facture(): Facture {
    return this.factureService.facture;
  }
  get currencys(): Array<Currency> {
    return this.factureService.currencys;
  }
  ngOnInit() {
    this.factureService.findAllCurrencies();
  }

}
