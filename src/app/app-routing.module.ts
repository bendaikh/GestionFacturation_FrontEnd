import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FactureCreateComponent} from './view/factures/facture-create/facture-create.component';
import {FactureListComponent} from './view/factures/facture-list/facture-list.component';
import {PaimentCreateComponent} from './view/paiments/paiment-create/paiment-create.component';
import {PaimentListComponent} from './view/paiments/paiment-list/paiment-list.component';
import {PaimentDailogComponent} from './view/paiments/paiment-dailog/paiment-dailog.component';
import {PageNoteFoundedComponent} from './view/page-note-founded/page-note-founded.component';

// tslint:disable-next-line:max-line-length
export const components = [FactureCreateComponent, FactureListComponent, PaimentCreateComponent, PaimentListComponent];
const routes: Routes = [
  {path: 'facture-create', component : components[0]},
  {path: 'facture-list', component : components[1]},
  {path: 'paiment-create', component : components[2]},
  {path: 'paiment-list', component : components[3]},
  {path: '**', component : PageNoteFoundedComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
