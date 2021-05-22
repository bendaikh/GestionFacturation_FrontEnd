import {Commande} from './commande.model';

export class Delivery {
  private id: number;
  private reference: string;
  // tslint:disable-next-line:variable-name
  private creation_date: Date;
  // tslint:disable-next-line:variable-name
  private delivery_date: Date;
  // tslint:disable-next-line:variable-name
  private cmr_Number: number;
  // tslint:disable-next-line:variable-name
  private cmr_Commodity: string;
  // tslint:disable-next-line:variable-name
  private cmr_Shipper: string;
  // tslint:disable-next-line:variable-name
  private cmr_Shipping_Adress: string;
  // tslint:disable-next-line:variable-name
  private cmr_Recipient: string;
  // tslint:disable-next-line:variable-name
  private cmr_Recipient_Address: string;
  private commande: Commande;
}
