import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FactureCreateComponent} from './view/factures/facture-create/facture-create.component';
import {FactureListComponent} from './view/factures/facture-list/facture-list.component';
import {PaimentCreateComponent} from './view/paiments/paiment-create/paiment-create.component';
import {PaimentListComponent} from './view/paiments/paiment-list/paiment-list.component';
import {PaimentDailogComponent} from './view/paiments/paiment-dailog/paiment-dailog.component';
import {PageNoteFoundedComponent} from './view/page-note-founded/page-note-founded.component';
import {FactureDetailComponent} from './view/factures/facture-detail/facture-detail.component';
import {CommandeDetailComponent} from './view/commandes/commande-detail/commande-detail.component';
import {CommandeComponent} from './view/commande/commande.component';
import {DevisComponent} from './view/devis/devis.component';
import {HomeComponent} from './view/home/home.component';
// tslint:disable-next-line:max-line-length
export const components = [FactureCreateComponent, FactureListComponent, PaimentCreateComponent, PaimentListComponent, FactureDetailComponent, CommandeDetailComponent];
const routes: Routes = [
  {path: '', component : components[0]},
  {path: 'facture-create', component : components[0]},
  {path: 'facture-list', component : components[1]},
  {path: 'paiment-create', component : components[2]},
  {path: 'paiment-list', component : components[3]},
  {path: 'facture-list/facture-create', component : components[0]},
  {path: 'paiment-list/facture-detail', component : components[4]},
  {path: 'facture-list/commande-detail', component : components[5]},
  {path: 'commande', component: CommandeComponent},
  {path: 'devis', component: DevisComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component : PageNoteFoundedComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
