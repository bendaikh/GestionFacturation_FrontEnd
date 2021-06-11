import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../controller/service/client.service';
import {DeviseService} from '../../controller/service/devise.service';
import {ExpeditionService} from '../../controller/service/expedition.service';
import {CommandeTypeService} from '../../controller/service/commande-type.service';
import {CommandeStatutService} from '../../controller/service/commande-statut.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private clientService: ClientService , private deviseService: DeviseService , private expeditionService: ExpeditionService , private  commandeTypeService: CommandeTypeService, private commandeStatutService: CommandeStatutService) { }

  ngOnInit() {
  }

  getAll() {
    this.clientService.getClients();
    this.deviseService.getDevise();
    this.expeditionService.getExpeditions();
    this.commandeTypeService.getCommandeType();
    this.commandeStatutService.getCommandeStatut();
  }
}
