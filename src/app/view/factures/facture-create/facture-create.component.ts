import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {FactureService} from '../../../controller/service/facture.service';
import {Facture} from '../../../controller/model/facture.model';
import {MatDialog} from '@angular/material';
import {Paiment} from '../../../controller/model/paiment.model';
import {PaimentService} from '../../../controller/service/paiment.service';
import {PaimentDailogComponent} from '../../paiments/paiment-dailog/paiment-dailog.component';
import {FactureEtat} from '../../../controller/model/facture-etat.model';
import {FactureStatut} from '../../../controller/model/facture-statut.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Commande} from '../../../controller/model/commande.model';
import {Devis} from '../../../controller/model/devis.model';
import {Currency} from '../../../controller/model/currency.model';
import {Client} from '../../../controller/model/client.model';
import {DeviseCreateComponent} from '../../devise/devise-create/devise-create.component';
import {FindDeviseComponent} from '../../devise/find-devise/find-devise.component';


@Component({
  selector: 'app-facture-create',
  templateUrl: './facture-create.component.html',
  styleUrls: ['./facture-create.component.css']
})
export class FactureCreateComponent implements OnInit , AfterViewInit {

  constructor(private factureService: FactureService, public dailog: MatDialog, public paimentService: PaimentService ) { }
  get facture(): Facture {
    return this.factureService.facture;
  }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  get factureEtats(): Array<FactureEtat> {
    return this.factureService.factureEtats;
  }
  get factureStatuts(): Array<FactureStatut> {
    return this.factureService.factureStatuts;
  }
  get factureEtat(): FactureEtat {
    return this.factureService.factureEtat;
  }
  get factureStatut(): FactureStatut {
    return this.factureService.factureStatut;
  }
  get commande(): Commande {
    return this.factureService.commande;
  }
  get commandes(): Array<Commande> {
    return this.factureService.commandes;
  }
  get devis(): Devis {
    return this.factureService.devis;
  }


  get listeDevis(): Array<Devis> {
    return this.factureService.listeDevis;
  }

  get currency(): Currency {
    return this.factureService.currency;
  }
  get currencys(): Array<Currency> {
    return this.factureService.currencys;
  }
  get client(): Client {
    return this.factureService.client;
  }
  get clients(): Array<Client> {
    return this.factureService.clients;
  }
  // tslint:disable-next-line:max-line-length
  ELEMENT_DATA: Paiment[];
  displayedColumns: string[] = ['datePaiment', 'paimentMethode' , 'montant' , 'commentaire' , 'reference' , 'comptabilise' , 'action'];
  dataSource = new MatTableDataSource<Paiment>(this.ELEMENT_DATA) ;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
    display = false;
  displayDevise = false;
  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 // selected: FactureEtat;
//  selecteds: FactureStatut;
  // tslint:disable-next-line:adjacent-overload-signatures
  public save() {
  //  this.facture.factureEtat.id = 0;
   // this.facture.factureEtat.id = this.factureEtat.id;
   // this.facture.factureStatut.id = this.factureStatut.id;
   // this.facture.factureEtat = this.selected;
  //  this.facture.factureStatut = this.selecteds;
    this.factureService.save();
  }
    ngOnInit() {
      this.factureService.findAllFactureEtat();
      this.factureService.findAllFactureStatut();
      this.factureService.findAllCommande();
      this.factureService.findAllClient();
      this.factureService.findAllDevis();
      this.factureService.findAllCurrencies();
      this.paimentService.findAllPaimentMethode();
      this.findAll();
    }
  public  findAll()  {
    const resp = this.paimentService.findAll();
    resp.subscribe(report => this.dataSource.data = report as Paiment[]);
  }
  creatDevise() {
    const dialogRef = this.dailog.open(DeviseCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  findDevise() {
    const dialogRef = this.dailog.open(FindDeviseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialog() {
   this.dailog.open(PaimentDailogComponent);
  }
}
