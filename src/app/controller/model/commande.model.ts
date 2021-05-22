import {CommandeStatut} from './commande-statut.model';
import {CommandeType} from './commande-type.model';
import {Client} from './client.model';
import {Currency} from './currency.model';
import {Expedition} from './expedition.model';
import {Delivery} from './delivery.model';

export class Commande {
  public id: number;
  public reference: string;
  // tslint:disable-next-line:variable-name
  public date_Commande: Date;
  public montant: number;
  public commentaire: string;
  public commandestatut: CommandeStatut;
  public commandeType: CommandeType;
  public expedition: Expedition;
  public client: Client;
  public currency: Currency;
  // tslint:disable-next-line:align
  public deliveries = new Array <Delivery>();
}
