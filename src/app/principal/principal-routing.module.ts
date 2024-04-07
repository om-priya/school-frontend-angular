import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { isLoggedInGuard } from '../guards/is-logged-in.guard';
import { onlySuperadminGuard } from '../guards/only-superadmin.guard';
import { PrincipalListComponent } from './components/principal-list/principal-list.component';
import { PrincipalDetailsComponent } from './components/principal-details/principal-details.component';
import { PrincipalDetailsEditComponent } from './components/principal-details-edit/principal-details-edit.component';

const PRINCIPAL_ROUTES: Routes = [
  {
    path: '',
    canActivate: [isLoggedInGuard, onlySuperadminGuard],
    component: PrincipalListComponent,
  },
  {
    path: ':id',
    canActivate: [isLoggedInGuard, onlySuperadminGuard],
    component: PrincipalDetailsComponent,
  },
  {
    path: ':id/edit',
    canActivate: [isLoggedInGuard, onlySuperadminGuard],
    component: PrincipalDetailsEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(PRINCIPAL_ROUTES)],
  exports: [RouterModule],
})
export class PrincipalRouting {}
