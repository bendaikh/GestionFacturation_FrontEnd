import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule, components} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
// import { PaimentDailogComponent } from './paiments/paiment-dailog/paiment-dailog.component';
import { MenuComponent } from './view/menu/menu.component';
import { PageNoteFoundedComponent } from './view/page-note-founded/page-note-founded.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FacturesComponent} from './view/factures/factures.component';
import {FactureCreateComponent} from './view/factures/facture-create/facture-create.component';
import {FactureListComponent} from './view/factures/facture-list/facture-list.component';
import {PaimentsComponent} from './view/paiments/paiments.component';
import {PaimentCreateComponent} from './view/paiments/paiment-create/paiment-create.component';
import {PaimentListComponent} from './view/paiments/paiment-list/paiment-list.component';
import {PaimentDailogComponent} from './view/paiments/paiment-dailog/paiment-dailog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { DeleteDailogComponent } from './view/factures/delete-dailog/delete-dailog.component';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeviseComponent } from './view/devise/devise.component';
import { FindDeviseComponent } from './view/devise/find-devise/find-devise.component';
import { DeviseSuccessComponent } from './view/devise/devise-success/devise-success.component';
import {DeviseCreateComponent} from './view/devise/devise-create/devise-create.component';

@NgModule({
  declarations: [
    AppComponent,
   components,
    PaimentDailogComponent,
    MenuComponent,
    PageNoteFoundedComponent,
    DeleteDailogComponent,
    DeviseComponent,
    DeviseCreateComponent,
    FindDeviseComponent,
    DeviseSuccessComponent
  ],
  entryComponents: [PaimentDailogComponent, DeleteDailogComponent, DeviseCreateComponent, FindDeviseComponent, DeviseSuccessComponent],
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
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
