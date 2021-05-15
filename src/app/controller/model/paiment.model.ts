import {Facture} from '../model/facture.model';
import {PaimentMethode} from './paiment-methode.model';
import {PaimentStatut} from './paiment-statut.model';

export class Paiment {
  public id: number;
  public reference: string;
  public datePaiment: Date;
  public dateCreation: Date;
  public montant: number;
  public reste: number;
  public commentaire: string;
  public paimentStatut: PaimentStatut;
  public facture: Facture;
  public paimentMethode: PaimentMethode;
}
