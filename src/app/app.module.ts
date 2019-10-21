import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './screens/sidebar/sidebar.component';
import { HomeComponent } from './screens/home/home.component';
import { MemberComponent } from './screens/member/member.component';
import { AddMemberComponent } from './screens/add-member/add-member.component';
import { EditMemberComponent } from './screens/edit-member/edit-member.component';
import { AddProjectComponent } from './screens/add-project/add-project.component';
import { EditProjectComponent } from './screens/edit-project/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    MemberComponent,
    AddMemberComponent,
    EditMemberComponent,
    AddProjectComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
