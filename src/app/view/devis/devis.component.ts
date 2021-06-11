import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Commande} from '../../controller/model/commande.model';
import {MatDialog} from '@angular/material';
import {ClientService} from '../../controller/service/client.service';
import {DeviseService} from '../../controller/service/devise.service';
import {HttpClient} from '@angular/common/http';
import {CommandeTypeService} from '../../controller/service/commande-type.service';
import {CommandeStatutService} from '../../controller/service/commande-statut.service';
import {CommandeService} from '../../controller/service/commande.service';
import {FindDeviseComponent} from '../devise/find-devise/find-devise.component';
import {DeviseCreateComponent} from '../devise/devise-create/devise-create.component';
import {QuitterDevisComponent} from '../quitter-devis/quitter-devis.component';
import {ClientCreatComponent} from '../client/client-creat/client-creat.component';
import {FindClientComponent} from '../client/find-client/find-client.component';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {

  isEditable = false;
  indeterminate = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  myGroup;
  selectedValue: any;
  selectedValue2: any;
  selectedValue3: any;
  dataSource3: any;
  disabled = true;

  get dataSource2() {
    return this.commandeStatutService.dataSource2;
  }
  get commande(): Commande {
    return this.commandeService.commande;
  }
  get dataSource() {
    return this.commandeTypeService.dataSource;
  }

  constructor(public matDialog: MatDialog , private formBuilder: FormBuilder, public dialog: MatDialog, private clientService: ClientService, private deviseService: DeviseService, private http: HttpClient , private commandeTypeService: CommandeTypeService, private commandeStatutService: CommandeStatutService,
              private commandeService: CommandeService, private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.myGroup = new FormGroup({
      firstName: new FormControl()
    });
  }

  get devisCommande() {
    console.log(this.commande);
    return this.commandeService.getCommande();
  }
  creatClient() {
    const dialogRef = this.dialog.open(ClientCreatComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  creatDevise() {
    const dialogRef = this.dialog.open(DeviseCreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  findClient() {
    this.clientService.getClients();
    const dialogRef = this.dialog.open(FindClientComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  findDevise() {
    const dialogRef = this.dialog.open(FindDeviseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getQuotationStaut() {
    // @ts-ignore
    this.http.get<Array<QuotationStatut>>('http://localhost:8041/gestionFacturation/quotationStatus/').subscribe(
      data => {
        this.dataSource3 = data;
        console.log(this.dataSource3);
      }, error => {
        console.log(error);
      }
    );

  }

  openDialog() {
    const dialogRef = this.matDialog.open(QuitterDevisComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        console.log('everything is fine right hre');
      }
    );
  }
}
