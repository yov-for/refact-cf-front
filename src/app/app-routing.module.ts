import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/core/guards/auth.guard';

const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  // { path: 'restore', component: RestoreComponent },
  // { path: 'change-password', component: ChangePasswordComponent },
  // { path: 'get-code', component: GetCodeComponent },
  {
      path: '',
      canActivate: [AuthGuard],
      loadChildren: () => import('./modules/features/features.module').then(m => m.CoreModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
