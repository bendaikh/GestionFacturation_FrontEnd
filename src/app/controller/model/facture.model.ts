import {FactureEtat} from './facture-etat.model';
import {FactureStatut} from './facture-statut.model';

export class Facture {
  public id: number;
  public reference: string;
  public dateCreation: Date;
  public dateEcheance: Date;
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
  public transmise: boolean;
  // tslint:disable-next-line:variable-name
  public en_litige: boolean;
  public factureEtat: FactureEtat;
  public factureStatut: FactureStatut;
}
