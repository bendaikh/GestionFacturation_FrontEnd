import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Paiment} from '../../../controller/model/paiment.model';
import {PaimentService} from '../../../controller/service/paiment.service';
import {MatTableDataSource} from '@angular/material/table';
import {Facture} from '../../../controller/model/facture.model';
import {FactureService} from '../../../controller/service/facture.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-paiment-list',
  templateUrl: './paiment-list.component.html',
  styleUrls: ['./paiment-list.component.css']
})

export class PaimentListComponent implements OnInit , AfterViewInit {

  constructor(private paimentService: PaimentService ) { }
  get paiment(): Paiment {
    return this.paimentService.paiment;
  }
  ELEMENT_DATA: Paiment[];
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['reference', 'dateCreation' , 'client' , 'montant' , 'paimentStatut' , 'facture' , 'factureStatut' , 'reste' , 'action'];
  dataSource = new MatTableDataSource<Paiment>(this.ELEMENT_DATA);
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
  get paiments(): Array<Paiment> {
    return this.paimentService.paiments;
  }
  public deleteByReference(index: number, paiment: Paiment) {
    this.paimentService.deleteByReference(index, paiment);
  }
  public update(index: number, paiment: Paiment) {
    this.paimentService.update(index, paiment);
  }
    ngOnInit() {
    this.findAll();
  }
  public  findAll()  {
    const resp = this.paimentService.findAll();
    resp.subscribe(report => this.dataSource.data = report as Paiment[]);
  }

}
