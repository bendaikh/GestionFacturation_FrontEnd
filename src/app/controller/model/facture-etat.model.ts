export class FactureEtat {
  public id: number;
  public reference: string;
  public nom: string;

  constructor(id: number, reference: string, nom: string) {
    this.id = id;
    this.reference = reference;
    this.nom = nom;
  }
}
