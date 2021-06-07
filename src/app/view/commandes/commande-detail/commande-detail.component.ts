import { Component, OnInit } from '@angular/core';
import {FactureService} from '../../../controller/service/facture.service';
import {Commande} from '../../../controller/model/commande.model';

@Component({
  selector: 'app-commande-detail',
  templateUrl: './commande-detail.component.html',
  styleUrls: ['./commande-detail.component.css']
})
export class CommandeDetailComponent implements OnInit {

  constructor(private factureService: FactureService) { }
  get commande(): Commande {
    return this.factureService.commande;
  }
  get i(): number {
    return this.factureService.i;
  }
  ngOnInit() {
  }

}
