import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FactureService} from '../../../controller/service/facture.service';

@Component({
  selector: 'app-paiment-delete-dailog',
  templateUrl: './paiment-delete-dailog.component.html',
  styleUrls: ['./paiment-delete-dailog.component.css']
})
export class PaimentDeleteDailogComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(public dialogRef: MatDialogRef<FactureService>,  @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit() {
  }
  onClickNo(): void {
    this.dialogRef.close();
  }
}
