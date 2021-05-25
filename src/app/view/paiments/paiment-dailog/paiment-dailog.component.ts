import { Component, OnInit } from '@angular/core';
import {PaimentService} from '../../../controller/service/paiment.service';
import {PaimentMethode} from '../../../controller/model/paiment-methode.model';
import {Paiment} from '../../../controller/model/paiment.model';
import {Facture} from '../../../controller/model/facture.model';
import {FactureService} from '../../../controller/service/facture.service';

@Component({
  selector: 'app-paiment-dailog',
  templateUrl: './paiment-dailog.component.html',
  styleUrls: ['./paiment-dailog.component.css']
})
export class PaimentDailogComponent implements OnInit {

  constructor(private paimentService: PaimentService , private factureService: FactureService) { }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  get paimentMethode(): PaimentMethode {
    return this.paimentService.paimentMethode;
  }
  get paimentMethodes(): Array<PaimentMethode> {
    return this.paimentService.paimentMethodes;
  }
  set factures(value: Array<Facture>) {
    this.factureService.factures = value;
  }
  get factures(): Array<Facture> {
    return this.factureService.factures;
  }
  public save() {
    this.paimentService.save();
  }
  ngOnInit() {
    this.paimentService.findAllPaimentMethode();
    this.findAllFacture();
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
