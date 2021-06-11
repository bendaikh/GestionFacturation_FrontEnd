import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Client} from '../../../controller/model/client.model';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {ClientService} from '../../../controller/service/client.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
export interface UserData {
  reference: string;
  nom: string;
  legal_form: string;
  adresse1: string;
  adresse2: string;
  zip_code: string;
  ville: string;
  pays: string;
  number1: string;
  number2: string;
  email: string;
  ele: Client;
}
@Component({
  selector: 'app-find-client',
  templateUrl: './find-client.component.html',
  styleUrls: ['./find-client.component.css']
})
export class FindClientComponent implements OnInit, AfterViewInit {

  _dataSource: MatTableDataSource<UserData>;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['select', 'reference', 'nom', 'legal_form', 'adresse1' , 'adresse2' , 'zip_code' , 'ville' , 'pays' , 'number1' , 'number2' , 'email'];
  selection = new SelectionModel<UserData>(true, []);
  constructor(private clientService: ClientService) {}
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  get dataSource(): MatTableDataSource<UserData> {
    return this._dataSource;
  }
  ngOnInit() {
    // @ts-ignore
    this._dataSource = new MatTableDataSource<UserData>(this.clientService.dataSource);
    console.log('look at this');
    console.log(this._dataSource);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this._dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  private isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  console(element) {
    console.log(element);
  }
}
