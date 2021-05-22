import {CommandeType} from './commande-type.model';
import {Expedition} from './expedition.model';
import {Currency} from './currency.model';
import {QuotationStatus} from './quotation-status.model';

export class Devis {
  private id: number;
  private reference: string;
  // tslint:disable-next-line:variable-name
  private date_devis: Date;
  private commercial: string;
  // tslint:disable-next-line:variable-name
  private date_echange: Date;
  private depart: string;
  private arrive: string;
  private prix: number;
  private quantity: number;
  // tslint:disable-next-line:variable-name
  public remise_val: number;
  // tslint:disable-next-line:variable-name
  public remise_pourcentage: number;
  // tslint:disable-next-line:variable-name
  public tva_valeur: number;
  // tslint:disable-next-line:variable-name
  public tva_pourcentage: number;
  private montant: number;
  private totalPayer: number;
  public note: string;
  public commentaire: string;
  // tslint:disable-next-line:variable-name
  private date_creation: Date;
  private type: CommandeType;
  private expedition: Expedition;
  private currency: Currency;
  // tslint:disable-next-line:variable-name
  private quotation_status: QuotationStatus;

}
