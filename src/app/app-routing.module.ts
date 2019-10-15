import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './screens/sidebar/sidebar.component';
import { HomeComponent } from './screens/home/home.component';
import { MemberComponent } from './screens/member/member.component';
import { AddMemberComponent } from './screens/add-member/add-member.component';
import { AddProjectComponent } from './screens/add-project/add-project.component';
import { EditMemberComponent } from './screens/edit-member/edit-member.component';
import { EditProjectComponent } from './screens/edit-project/edit-project.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "add-project",
    component : AddProjectComponent
  },
  {
    path : "edit-project/:id",
    component : EditProjectComponent
  },
  {
    path : "member",
    component : MemberComponent
  },
  {
    path : "add-member",
    component : AddMemberComponent
  },
  {
    path : "edit-member/:id",
    component : EditMemberComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
