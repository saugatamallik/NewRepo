import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { LoginComponent }   from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProcessUpdateComponent } from './pages/process-update/process-update.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { ApprovalComponent } from './pages/approval/approval.component';

 
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'process-update', component: ProcessUpdateComponent },
  { path: 'file-upload', component: FileUploadComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'approval', component: ApprovalComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class CpgAdminRoutingModule {}