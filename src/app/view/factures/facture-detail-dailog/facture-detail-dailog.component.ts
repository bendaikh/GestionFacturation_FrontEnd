import {Component, Inject, OnInit} from '@angular/core';
import {FactureService} from '../../../controller/service/facture.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Facture} from '../../../controller/model/facture.model';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-facture-detail-dailog',
  templateUrl: './facture-detail-dailog.component.html',
  styleUrls: ['./facture-detail-dailog.component.css']
})
export class FactureDetailDailogComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private factureService: FactureService, public dialogRef: MatDialogRef<FactureService>, @Inject(MAT_DIALOG_DATA) public data: Facture) { }
  ELEMENT_DATA: Facture[];
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['reference', 'dateCreation' , 'dateEchaence', 'client'  , 'total' , 'factureEtat' , 'factureStatut', 'commande' , 'action'];
  // tslint:disable-next-line:variable-name
  private _dataSource = new MatTableDataSource<Facture>(this.ELEMENT_DATA);
  public  findAll()  {
    console.log('Hna dKhelti l Dailog Info ');
    console.log(this.data);
    const resp = this.factureService.findFacturefindByReference(this.data);
    // @ts-ignore
    resp.subscribe(report => this._dataSource.data = report);
  }
  ngOnInit() {
    this.findAll();
  }

}
