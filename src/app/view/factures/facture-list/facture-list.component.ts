import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {Facture} from '../../../controller/model/facture.model';
import {FactureService} from '../../../controller/service/facture.service';
import {MatTableDataSource} from '@angular/material/table';
import {PaimentDailogComponent} from '../../paiments/paiment-dailog/paiment-dailog.component';
import {MatDialog} from '@angular/material';
import {DeleteDailogComponent} from '../delete-dailog/delete-dailog.component';
import {Paiment} from '../../../controller/model/paiment.model';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';



@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit , AfterViewInit {
  private deleteId: string;
  public fa: string;
  public i: number;
  constructor(private factureService: FactureService, public dailog: MatDialog) { }
  get facture(): Facture {
    return this.factureService.facture;
  }
  get factures(): Array<Facture> {
    return this.factureService.factures;
  }
  // tslint:disable-next-line:max-line-length
  ELEMENT_DATA: Facture[];
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['reference', 'dateCreation' , 'dateEchaence', 'client'  , 'total' , 'factureEtat' , 'factureStatut', 'commande' , 'action'];
  // tslint:disable-next-line:variable-name
   private _dataSource = new MatTableDataSource<Facture>(this.ELEMENT_DATA);
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this._dataSource.paginator = this.paginator;
    this._dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this._dataSource.filter = filterValue.trim().toLowerCase();
    if (this._dataSource.paginator) {
      this._dataSource.paginator.firstPage();
    }
  }


  public update(index: number, facture: Facture) {
    this.factureService.update(index, facture);
  }
  ngOnInit() {
    this.findAll();
    console.log(this.findAll());
  }
  public  findAll()  {
    const resp = this.factureService.findAll();
    resp.subscribe(report => this._dataSource.data = report as Facture[]);
  }

  get dataSource(): MatTableDataSource<Facture> {
    return this._dataSource;
  }

  set dataSource(value: MatTableDataSource<Facture>) {
    this._dataSource = value;
  }

  openDialog(index: number , facture: Facture) {
    console.log('Hadi 9bel Matdkhel ' + facture);
    // @ts-ignore
    const dialogRef = this.dailog.open(DeleteDailogComponent, {
      width: '350px',
      data: 'Are you sure that you want delete this record?'
    });
    dialogRef.afterClosed().subscribe(
      res => {
        console.log(res.reference);
        if (res) {
          this.factureService.deleteByReference(index, facture);
          console.log(res.reference);
        }
      }
    );
  }
}
