import { Component, OnInit } from '@angular/core';
import {PaimentService} from '../../../controller/service/paiment.service';
import {PaimentMethode} from '../../../controller/model/paiment-methode.model';

@Component({
  selector: 'app-paiment-dailog',
  templateUrl: './paiment-dailog.component.html',
  styleUrls: ['./paiment-dailog.component.css']
})
export class PaimentDailogComponent implements OnInit {

  constructor(private paimentService: PaimentService) { }
  get paimentMethode(): PaimentMethode {
    return this.paimentService.paimentMethode;
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

}
