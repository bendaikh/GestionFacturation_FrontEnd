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
  // tslint:disable-next-line:max-line-length
  ELEMENT_DATA: Paiment[];
  displayedColumns: string[] = ['datePaiment', 'paimentMethode' , 'montant' , 'commentaire' , 'reference' , 'comptabilise' , 'action'];
  dataSource = new MatTableDataSource<Paiment>(this.ELEMENT_DATA) ;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

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
   // this.facture.factureEtat = this.selected;
  //  this.facture.factureStatut = this.selecteds;
    this.factureService.save();
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
    ngOnInit() {
      this.factureService.findAllFactureEtat();
      this.factureService.findAllFactureStatut();
      this.paimentService.findAllPaimentMethode();
      this.findAll();
    }
  public  findAll()  {
    const resp = this.paimentService.findAll();
    resp.subscribe(report => this.dataSource.data = report as Paiment[]);
  }

  openDialog() {
   this.dailog.open(PaimentDailogComponent);
  }
}