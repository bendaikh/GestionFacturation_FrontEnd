import { Component, OnInit } from '@angular/core';
import {PaimentService} from '../../../controller/service/paiment.service';
import {Paiment} from '../../../controller/model/paiment.model';
import {PaimentMethode} from '../../../controller/model/paiment-methode.model';

@Component({
  selector: 'app-paiment-create',
  templateUrl: './paiment-create.component.html',
  styleUrls: ['./paiment-create.component.css']
})
export class PaimentCreateComponent implements OnInit {

  constructor(private paimentService: PaimentService) { }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  public save() {
    this.paimentService.save();
  }
  ngOnInit() {
    this.paimentService.findAllPaimentMethode();
  }
  get paimentMethode(): PaimentMethode {
    return this.paimentService.paimentMethode;
  }
  get paimentMethodes(): Array<PaimentMethode> {
    return this.paimentService.paimentMethodes;
  }
}
