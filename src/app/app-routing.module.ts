import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './public/about/about.component';
import { HomeComponent } from './public/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'feedbacks',
    loadChildren: () =>
      import('./feedbacks/feedbacks.module').then((m) => m.FeedbacksModule),
  },
  {
    path: 'issues',
    loadChildren: () =>
      import('./issues/issues.module').then((m) => m.IssuesModule),
  },
  {
    path: 'leaves',
    loadChildren: () =>
      import('./leaves/leaves.module').then((m) => m.LeavesModule),
  },
  {
    path: 'principals',
    loadChildren: () =>
      import('./principal/principal.module').then((m) => m.PrincipalModule),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./teacher/teacher.module').then((m) => m.TeacherModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
