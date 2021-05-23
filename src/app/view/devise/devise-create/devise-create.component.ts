import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../../controller/service/facture.service';
import {Currency} from '../../../controller/model/currency.model';

@Component({
  selector: 'app-devise-create',
  templateUrl: './devise-create.component.html',
  styleUrls: ['./devise-create.component.css']
})
export class DeviseCreateComponent implements OnInit {
  click = false;
  constructor(private factureService: FactureService) { }

  ngOnInit() {
  }
  get currency(): Currency {
    return this.factureService.currency;
  }
  saveDevise() {
    this.factureService.saveDevise();
    this.click = true;
  }
}
