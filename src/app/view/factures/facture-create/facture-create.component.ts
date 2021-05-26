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
import {Delivery} from '../../../controller/model/delivery.model';
// import {jsPDF} from 'jspdf';
// import 'jspdf-autotable';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {FactureListComponent} from '../facture-list/facture-list.component';
import {CommandeType} from '../../../controller/model/commande-type.model';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
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
get factures(): Array<Facture> {
    return this.factureService.factures;
  }
  get commandeType(): CommandeType {
    return this.factureService.commandeType;
  }
  // tslint:disable-next-line:max-line-length
  ELEMENT_DATA: Paiment[];
  displayedColumns: string[] = ['datePaiment', 'paimentMethode' , 'montant' , 'commentaire' , 'reference' , 'comptabilise' , 'action'];
  dataSource = new MatTableDataSource<Paiment>(this.ELEMENT_DATA) ;
  ELEMENT_DATA2: Delivery[];
  // tslint:disable-next-line:max-line-length
  dispalyedColumns2: string[] = ['reference', 'creation_date', 'delivery_date', 'cmr_Commodity', 'cmr_Shipping_Adress', 'cmr_Recipient_Address'];
  dataSource2 = new MatTableDataSource<Delivery>(this.ELEMENT_DATA2) ;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;
  display = false;
  displayDevise = false;
  montant(facture: Facture) {
    // tslint:disable-next-line:triple-equals
    if (facture.prix == 0 && facture.quantite == 0) {
      return facture.totalHt = 0;
    }
    return facture.totalHt = this.facture.prix * this.facture.quantite;
  }
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
  public deleteByReference(index: number, paiment: Paiment) {
    this.paimentService.deleteByReference(index, paiment);
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  public save() {
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
      // @ts-ignore
      this.findLivraisonByCommandeReference();
    }
  public  findAll()  {
    const resp = this.paimentService.findAll();
    resp.subscribe(report => this.dataSource.data = report as Paiment[]);
  }
  public findLivraisonByCommandeReference(commande: Commande) {
    console.log(commande);
    const resp = this.factureService.findLivraisonByCommandeReference(commande);
    resp.subscribe(report => this.dataSource2.data = report as Delivery[]);
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
  }     generatePDF() {
    console.log(this.factures.map(ed => {
      return ed.reference;
    }
    ));
    const doc = this.getDocument();
    pdfMake.createPdf(doc).open();
    }
  getDocument() {
    // @ts-ignore
    return {
      content: [
        {
          columns: [
            [{
            text: 'NT DATA CONSULTING Morocco',
            style: 'name'
            },
              {
                text: 'Adresse : AGADIR Cité inovation  '
              },
              {
                text: 'Tel : 052827364 '
              },
              {
                text: 'Mail : NtDataConsulting@gmail.com '
              },
            ],
          ]
        },
        {
          text: '                                                ',
        },
        {
          text: '                                                ',
        },
        {
          text: 'FACTURE',
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: ' ',
          style: 'sign',
          alignment: 'right'
        },
        {
          // tslint:disable-next-line:max-line-length
          image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAJYC7gMBIgACEQEDEQH/xAAxAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYBAQEBAQEBAQAAAAAAAAAAAAAABAMBAgX/2gAMAwEAAhADEAAAAuqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArrHmJabRVpqbRVi0VYtLHmrrbGaLYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHMdPzEVhU2k1GSFtJCpmeuSrql0+/HWqrR9H594VpZKqwNrmZ5bnMnTPPQ10xeqezNqi3Fuq9JdIXpMRqkv1XsLBiMlfoLcgk5y90TlRqLxDwJ7XTF6qJpKKMvGncHN9IEaSHnhkwGZoN4DVtCPIAAAAAAAAAAAHMdPzEVkDDOZlrEnUt1zsCfAn+esctOnjrcY9Z9H58nVs1HtzU5GNtU2xFxrpJruOd6IprmLBLiq3bST7RWBC9xyGy15Q6OrsdZpzh2hvVIkR7OlOgRZRTXNNclMDzO35IuJntOdBo1wC6p7inPNs2GRtgTq6fBI13X25S5YemUyJIN1VaVZYxt+gm1s+CXYAAAAAAAAAAHMdPzEVmORJXjkGOQLCvsNct8mCpmmZwBPwhiZnAEzOAJyCJ+uIN8iAJsfUJ+EMT8YQnaY4k7oAkownx9A2SYQmZwBMQxPxhCcgjZLgCfhDE9AEzOANsqAJmcASkUT4+gTfIYkb4A3SYAnoAnwYGvDayVrx7slaLJW5FhaxpN0QbZAAAAKC/Za886FjrzzoRzzoRz1pNe/Ghva56G+tJavFgwxNqNoLBB3Eh7EJT2GS1b4WaFaGhRWJMao5NU9mbVfNM0aKWaFINqPGLFGkHqqkE1X5E5p1kpW7iY31ZNVl0aFPILBHzNqBrLNowJSBMM0awNDe4j1G6DFaE+4Az68vvd18AUzgAAAAAAAAAAa+e6UcvNuxyFrdClrurHMyL4cpl1I52t7Qc3F64ch14Utf1Q5OzuRSQOqFHA6sc/WdmOd19NVFPr63Yc7byxyWfVCgX45OZbyTjJPVCv57sRzXSejlM+oHNx+sHLauuHMyb0UNZ2I53ojhS4xIbglpAGzry+y2fQ+eFGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcKL2PDdgzTU4Mxgz2d5jfs74AowAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//xAAC/9oADAMBAAIAAwAAACEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABY4454AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbfP3wAQAgAgwgAAAwAAwAgwwAwQgAgggQAAAAAAAAAAAAABZp3+xCygBQARSyiRgTAwAADDwRQSzCCwRixAAAAAAAAAAABb332g5675467567677665466777775667547r888uEAAAAAAAABMAAwwwgQgwgQAAQwgQwQAwAQggAAwQgLb/wD4hAAAAAAAAAAAAwAwwgAgwgAgwgQ0QAQAQAwgQgwQgCF//wDOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmcstGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8QAAv/aAAwDAQACAAMAAAAQ8888888888888888888888888888888888888888888888888888+888p8888888888888888888888888888888888888888889+5wrw008w0088w8048448w80444080888048888888888899U9vk8EUEUQs4gsIAsc8UAEk088sUsAMssI8888888888898887BRhBRBxRBxxRxBhxxxxhBhxRhxxxxxB1/NNL+88888sPPPc88w00www084008008ww48804w40ww0+N/8A+RvPPPPPPPPPPPDLPDDDPPHLDPHDHFDPHJPPPHDHLLH3P/8AqXzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz+nDDE7zzzzzzzzzzzz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',
          width: 110,
          style: 'img',
          height: 90,
          alignement: 'right',
        },
        {
          text: '                                                ',
        },
        {
          text: '                                                ',
        },
        {
          text: '                                                ',
        },

        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', '*', '*', '*'],
            body: [
              [
                {
                  text: 'N°',
                  style: 'tableheader'
                },
                {
                    text: 'Libellé',
                  style: 'tableheader'
                },
                {
                  text: 'Prix',
                  style: 'tableheader'
                },
                {
                  text: 'Quantité',
                  style: 'tableheader'
                },
                {
                  text: 'Montant',
                  style: 'tableheader'
                },
              ],
              // tslint:disable-next-line:max-line-length
              [this.facture.reference, {text: 'Commande n° : ' + this.facture.dateCreation + '                                      Date de la commande : ' + this.facture.dateEchaence + '                             Type : ' + '                                                                Expédition : ' + '                                              Livraisons : ' } , this.facture.prix, this.facture.quantite, 'sdf'],
            ],
        },
    },
        {
        text: '                                                ',
        },
        {
          table: {
            headerRows: 1,
            body: [
              [
              {
                text: 'Taux TVA',
              },
              ],
              [this.facture.tva_pourcentage],
            ]
          }
        },
        {
          text: '                                                ',
        },
        {
          table: {
            aligment: 'right',
            style: 'tb',
            headerRows: 1,
            widths: ['auto', 'auto'],
            body: [
              [
                {
                  text: 'Total HT',
                },
                {
                  text: '                ',
                },
              ],
              ['Remise ', '     '],
              ['Total HT net ', '           '],
              ['TVA ', '                    '],
              ['Total à payer ' , '               '],
            ]
          }
        },
        {
          text: '                                                ',
        },
        {
          text: '                                                ',
        },
        {
          text: '                                                ',
        },
        {
          text: 'Notes :                                   ',
        },
        {
          text: '                                                ',
        },
        {
          table: {
            widths: ['*'],
            body: [
              [
                {
                text: '   ',
              },
              ]
            ],
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 20]
        },
        name: {
          fontSize: 16,
          bold: true,
        },
        tb: {
          alignment: 'right'
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: 'right',
          italic: true
        },
      img: {
        margin: [0, -190, 0, 10],
        alignment: 'right',
      },
        tableheader: {
          bold: true,
          fontSize: 14,
          alignment: 'center'
        },
      }
    };
  }
  downloadPDF() {
  console.log('downloading pdf .....');
  // @ts-ignore
  const doc = new jsPDF();
  doc.text( 'NT DATA CONSULTING Morocco' , 15, 10);
  doc.text('Adresse : AGADIR Cité inovation  ', 15 , 25);
  doc.text('Tel : 052827364 ', 15 , 35);
  doc.text('Mail : NtDataConsulting@gmail.com ', 15 , 45);
  doc.text( 'FACTURE', 80 , 80);
  // @ts-ignore
  doc.text('Date : ' + this.facture.dateCreation, 15, 100);
  doc.text('Information Client : ', 140, 110);
  doc.text('Nom : ' + this.client.nom, 140, 120);
  doc.text('Adresse : ' + this.client.adresse1, 140, 130);
  doc.text('Nom : ' + this.facture.reference, 15, 140);

  // doc.autoTable(columns, rows);
  console.log(this.facture.dateCreation);
    // tslint:disable-next-line:prefer-const max-line-length
  let imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAJYC7gMBIgACEQEDEQH/xAAxAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYBAQEBAQEBAQAAAAAAAAAAAAAABAMBAgX/2gAMAwEAAhADEAAAAuqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArrHmJabRVpqbRVi0VYtLHmrrbGaLYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHMdPzEVhU2k1GSFtJCpmeuSrql0+/HWqrR9H594VpZKqwNrmZ5bnMnTPPQ10xeqezNqi3Fuq9JdIXpMRqkv1XsLBiMlfoLcgk5y90TlRqLxDwJ7XTF6qJpKKMvGncHN9IEaSHnhkwGZoN4DVtCPIAAAAAAAAAAAHMdPzEVkDDOZlrEnUt1zsCfAn+esctOnjrcY9Z9H58nVs1HtzU5GNtU2xFxrpJruOd6IprmLBLiq3bST7RWBC9xyGy15Q6OrsdZpzh2hvVIkR7OlOgRZRTXNNclMDzO35IuJntOdBo1wC6p7inPNs2GRtgTq6fBI13X25S5YemUyJIN1VaVZYxt+gm1s+CXYAAAAAAAAAAHMdPzEVmORJXjkGOQLCvsNct8mCpmmZwBPwhiZnAEzOAJyCJ+uIN8iAJsfUJ+EMT8YQnaY4k7oAkownx9A2SYQmZwBMQxPxhCcgjZLgCfhDE9AEzOANsqAJmcASkUT4+gTfIYkb4A3SYAnoAnwYGvDayVrx7slaLJW5FhaxpN0QbZAAAAKC/Za886FjrzzoRzzoRz1pNe/Ghva56G+tJavFgwxNqNoLBB3Eh7EJT2GS1b4WaFaGhRWJMao5NU9mbVfNM0aKWaFINqPGLFGkHqqkE1X5E5p1kpW7iY31ZNVl0aFPILBHzNqBrLNowJSBMM0awNDe4j1G6DFaE+4Az68vvd18AUzgAAAAAAAAAAa+e6UcvNuxyFrdClrurHMyL4cpl1I52t7Qc3F64ch14Utf1Q5OzuRSQOqFHA6sc/WdmOd19NVFPr63Yc7byxyWfVCgX45OZbyTjJPVCv57sRzXSejlM+oHNx+sHLauuHMyb0UNZ2I53ojhS4xIbglpAGzry+y2fQ+eFGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcKL2PDdgzTU4Mxgz2d5jfs74AowAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//xAAC/9oADAMBAAIAAwAAACEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABY4454AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbfP3wAQAgAgwgAAAwAAwAgwwAwQgAgggQAAAAAAAAAAAAABZp3+xCygBQARSyiRgTAwAADDwRQSzCCwRixAAAAAAAAAAABb332g5675467567677665466777775667547r888uEAAAAAAAABMAAwwwgQgwgQAAQwgQwQAwAQggAAwQgLb/wD4hAAAAAAAAAAAAwAwwgAgwgAgwgQ0QAQAQAwgQgwQgCF//wDOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmcstGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8QAAv/aAAwDAQACAAMAAAAQ8888888888888888888888888888888888888888888888888888+888p8888888888888888888888888888888888888888889+5wrw008w0088w8048448w80444080888048888888888899U9vk8EUEUQs4gsIAsc8UAEk088sUsAMssI8888888888898887BRhBRBxRBxxRxBhxxxxhBhxRhxxxxxB1/NNL+88888sPPPc88w00www084008008ww48804w40ww0+N/8A+RvPPPPPPPPPPPDLPDDDPPHLDPHDHFDPHJPPPHDHLLH3P/8AqXzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz+nDDE7zzzzzzzzzzzz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';
  doc.addImage(imgData, 'JPEG', 150, 9, 40 , 40 );
  doc.save('Facture.pdf');

  }
  openDialog() {
   this.dailog.open(PaimentDailogComponent);
  }
}
