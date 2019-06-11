import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CpgAdminRoutingModule } from './cpg-admin-routing.module';

import { CpgAdminComponent } from './cpg.admin.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProcessUpdateComponent } from './pages/process-update/process-update.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { ApprovalComponent } from './pages/approval/approval.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    CpgAdminComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProcessUpdateComponent,
    FileUploadComponent,
    HomeComponent,
    ManageUsersComponent,
    ApprovalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CpgAdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [CpgAdminComponent]
})
export class CpgAdminModule { }
