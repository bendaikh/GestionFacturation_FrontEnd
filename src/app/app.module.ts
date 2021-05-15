import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { FacturesComponent } from './factures/factures.component';
import { FactureCreateComponent } from './factures/facture-create/facture-create.component';
import { FactureListComponent } from './factures/facture-list/facture-list.component';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { PaimentsComponent } from './paiments/paiments.component';
import { PaimentCreateComponent } from './paiments/paiment-create/paiment-create.component';
import { PaimentListComponent } from './paiments/paiment-list/paiment-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { PaimentDailogComponent } from './paiments/paiment-dailog/paiment-dailog.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturesComponent,
    FactureCreateComponent,
    FactureListComponent,
    PaimentsComponent,
    PaimentCreateComponent,
    PaimentListComponent,
    PaimentDailogComponent
  ],
  entryComponents: [PaimentDailogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule
],
  providers: [],
  bootstrap: [FacturesComponent]
})
export class AppModule { }
