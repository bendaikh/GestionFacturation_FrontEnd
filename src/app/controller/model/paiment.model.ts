import {Facture} from '../model/facture.model';
import {PaimentMethode} from './paiment-methode.model';
import {PaimentStatut} from './paiment-statut.model';
import {Commande} from './commande.model';
import {Client} from './client.model';

export class Paiment {
  public id: number;
  public reference: string;
  public datePaiment: Date;
  public dateCreation: Date;
  public montant: number;
  public reste: number;
  public commentaire: string;
  public comptabilise: boolean;
  public enregistre: boolean;
  public paimentStatut: string;
  public facture: Facture;
  public commande: Commande;
  public client: Client;
  public paimentMethode: PaimentMethode;

}
