import { Component, OnInit , Inject} from '@angular/core';
import {Facture} from '../../../controller/model/facture.model';
import {FactureService} from '../../../controller/service/facture.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-delete-dailog',
  templateUrl: './delete-dailog.component.html',
  styleUrls: ['./delete-dailog.component.css']
})
export class DeleteDailogComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private factureService: FactureService,  public dialogRef: MatDialogRef<FactureService>,  @Inject(MAT_DIALOG_DATA) public message: string ,
              @Inject(MAT_DIALOG_DATA) public index: number , @Inject(MAT_DIALOG_DATA) public facture: Facture) { }
  ngOnInit() {
  }
  onClickNo(): void {
    this.dialogRef.close();
  }

}
