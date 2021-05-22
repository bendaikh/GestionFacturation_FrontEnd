import {CommandeStatut} from './commande-statut.model';
import {CommandeType} from './commande-type.model';
import {Client} from './client.model';
import {Currency} from './currency.model';
import {Expedition} from './expedition.model';
import {Delivery} from './delivery.model';

export class Commande {
  private id: number;
  private reference: string;
  // tslint:disable-next-line:variable-name
  private date_Commande: Date;
  private montant: number;
  private commentaire: string;
  private commandestatut: CommandeStatut;
  private commandeType: CommandeType;
  private expedition: Expedition;
  private client: Client;
  private currency: Currency;
  // tslint:disable-next-line:align
  private deliveries = new Array <Delivery>();
}
