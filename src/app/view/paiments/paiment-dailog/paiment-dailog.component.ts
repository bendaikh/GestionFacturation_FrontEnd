import {Component, Inject, OnInit} from '@angular/core';
import {PaimentService} from '../../../controller/service/paiment.service';
import {PaimentMethode} from '../../../controller/model/paiment-methode.model';
import {Paiment} from '../../../controller/model/paiment.model';
import {Facture} from '../../../controller/model/facture.model';
import {FactureService} from '../../../controller/service/facture.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-paiment-dailog',
  templateUrl: './paiment-dailog.component.html',
  styleUrls: ['./paiment-dailog.component.css']
})
export class PaimentDailogComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private paimentService: PaimentService , private factureService: FactureService, public dialogRef: MatDialogRef<FactureService>, @Inject(MAT_DIALOG_DATA) public index: number) { }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  get paimentMethode(): PaimentMethode {
    return this.paimentService.paimentMethode;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  set paiment(value: Paiment) {
    this.paimentService.paiment = value;
  }
  public addPaiment() {
    this.factureService.addPaiment(this.paiment, this.index);
    this.paiment = null;
  }
  get paimentMethodes(): Array<PaimentMethode> {
    return this.paimentService.paimentMethodes;
  }

  public save() {
    this.paimentService.save();
  }
  ngOnInit() {
    this.paimentService.findAllPaimentMethode();
  }
  onClickNo(): void {
    this.dialogRef.close();
  }
}
