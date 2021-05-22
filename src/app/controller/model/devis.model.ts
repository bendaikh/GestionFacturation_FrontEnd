import {CommandeType} from './commande-type.model';
import {Expedition} from './expedition.model';
import {Currency} from './currency.model';
import {QuotationStatus} from './quotation-status.model';

export class Devis {
  public id: number;
  public reference: string;
  // tslint:disable-next-line:variable-name
  public date_devis: Date;
  public commercial: string;
  // tslint:disable-next-line:variable-name
  public date_echange: Date;
  public depart: string;
  public arrive: string;
  public prix: number;
  public quantity: number;
  // tslint:disable-next-line:variable-name
  public remise_val: number;
  // tslint:disable-next-line:variable-name
  public remise_pourcentage: number;
  // tslint:disable-next-line:variable-name
  public tva_valeur: number;
  // tslint:disable-next-line:variable-name
  public tva_pourcentage: number;
  public montant: number;
  public totalPayer: number;
  public note: string;
  public commentaire: string;
  // tslint:disable-next-line:variable-name
  public date_creation: Date;
  public type: CommandeType;
  public expedition: Expedition;
  public currency: Currency;
  // tslint:disable-next-line:variable-name
  public quotation_status: QuotationStatus;

}
