import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Commande} from '../../../controller/model/commande.model';
import {CommandeType} from '../../../controller/model/commande-type.model';
import {CommandeStatut} from '../../../controller/model/commande-statut.model';
import {ClientService} from '../../../controller/service/client.service';
import {ExpeditionService} from '../../../controller/service/expedition.service';
import {CommandeTypeService} from '../../../controller/service/commande-type.service';
import {CommandeStatutService} from '../../../controller/service/commande-statut.service';
import {CommandeService} from '../../../controller/service/commande.service';
import {DeviseService} from '../../../controller/service/devise.service';
import {Delivery} from '../../../controller/model/delivery.model';

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent {
  get b(): number {
    return this._b;
  }
  private _b: number = 1;
  private _a: number = 1;
  selectedValue: string;
  disableSelect = new FormControl(true);
  isChecked = true;
  selectedValue2: string;
  selectedValue3: string;
  get deliveries() {
    return  this.commandeService.deliverie;
  }
  get deliveriesOther(): Array<Delivery> {
    return this.commandeService.deliveries;
  }
  get command(): Commande {
    return this.commandeService.commande;
  }
  get expeditions() {
    return this.expeditionService.dataSource;
  }
  get devises() {
    return this.deviseService.dataSource;
  }
  get clients() {
    return this.clientService.dataSource;
  }
  constructor(private clientService: ClientService ,
              private deviseService: DeviseService , private expeditionService: ExpeditionService,
              private commandeTypeService: CommandeTypeService,
              private commandeStatutService: CommandeStatutService, private commandeService: CommandeService) {
  }


  get commandeType(): Array<CommandeType> {
    return this.commandeTypeService.dataSource;
  }
  get commandeStatus(): Array<CommandeStatut> {
    return this.commandeStatutService.dataSource2;
  }
  get getDevise() {
    return this.deviseService.getDevise();
  }

  saveCommande() {
    console.log(this.command);
    this.commandeService.saveCommande();
    this._b = null;
    this._b = this._a + 1;
  }

  addLivraison() {
    this.commandeService.addLivraison();
  }
  public delete(index: number) {
    this.deliveriesOther.splice(index, 1);
  }


  update(i: number, d: Delivery) {
    this.commandeService.update(i, d);
  }
}
