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
import { MenuComponent } from './view/menu/menu.component';
import { PageNoteFoundedComponent } from './view/page-note-founded/page-note-founded.component';
import {MatToolbarModule} from '@angular/material/toolbar';
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
import { PaimentDeleteDailogComponent } from './view/paiments/paiment-delete-dailog/paiment-delete-dailog.component';
import { PaimentUpdateDailogComponent } from './view/paiments/paiment-update-dailog/paiment-update-dailog.component';
import { PaimentDetailDailogComponent } from './view/paiments/paiment-detail-dailog/paiment-detail-dailog.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { CommandeDetailComponent } from './view/commandes/commande-detail/commande-detail.component';
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
    DeviseSuccessComponent,
    PaimentDeleteDailogComponent,
    PaimentUpdateDailogComponent,
    PaimentDetailDailogComponent,
    CommandeDetailComponent
  ],
  // tslint:disable-next-line:max-line-length
  entryComponents: [PaimentDailogComponent, DeleteDailogComponent, DeviseCreateComponent, FindDeviseComponent, DeviseSuccessComponent, PaimentUpdateDailogComponent, PaimentDeleteDailogComponent, PaimentDetailDailogComponent],
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
    MatRadioModule,
    MatPaginatorModule,
    MatStepperModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
