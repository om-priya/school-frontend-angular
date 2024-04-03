import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalListComponent } from './components/principal-list/principal-list.component';
import { PrincipalDetailsComponent } from './components/principal-details/principal-details.component';
import { PrincipalDetailsEditComponent } from './components/principal-details-edit/principal-details-edit.component';

const PRINCIPAL_ROUTES: Routes = [
  { path: '', component: PrincipalListComponent },
  { path: ':id', component: PrincipalDetailsComponent },
  { path: ':id/edit', component: PrincipalDetailsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(PRINCIPAL_ROUTES)],
  exports: [RouterModule],
})
export class PrincipalRouting {}
