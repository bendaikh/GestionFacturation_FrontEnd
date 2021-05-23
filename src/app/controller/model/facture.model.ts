import {FactureEtat} from './facture-etat.model';
import {FactureStatut} from './facture-statut.model';
import {Commande} from './commande.model';
import {Currency} from './currency.model';
import {Devis} from './devis.model';
import {Client} from './client.model';

export class Facture {
  public id: number;
  public reference: string;
  public dateCreation: Date;
  public dateEchaence: Date;
  public prix: number;
  public quantite: number;
  public totalht: number;
  // tslint:disable-next-line:variable-name
  public remise_val: number;
  // tslint:disable-next-line:variable-name
  public remise_pourcentage: number;
  // tslint:disable-next-line:variable-name
  public tva_val: number;
  // tslint:disable-next-line:variable-name
  public tva_pourcentage: number;
  public totalHtnet: number;
  public cdtpaiment: number;
  public notes: string;
  public commentaire: string;
  public comptabilise: boolean;
  public factureEtat: FactureEtat;
  public factureStatut: FactureStatut;
  public commande: Commande;
  public currency: Currency;
  public devis: Devis;
  public client: Client;
}
