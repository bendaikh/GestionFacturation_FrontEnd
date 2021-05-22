import {Commande} from './commande.model';

export class Delivery {
  public id: number;
  public reference: string;
  // tslint:disable-next-line:variable-name
  public creation_date: Date;
  // tslint:disable-next-line:variable-name
  public delivery_date: Date;
  // tslint:disable-next-line:variable-name
  public cmr_Number: number;
  // tslint:disable-next-line:variable-name
  public cmr_Commodity: string;
  // tslint:disable-next-line:variable-name
  public cmr_Shipper: string;
  // tslint:disable-next-line:variable-name
  public cmr_Shipping_Adress: string;
  // tslint:disable-next-line:variable-name
  public cmr_Recipient: string;
  // tslint:disable-next-line:variable-name
  public cmr_Recipient_Address: string;
  public commande: Commande;
}
