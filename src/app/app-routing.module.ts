import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
  {path:"",component : DashboardComponent},
  {path:"dash",component: DashboardComponent},
  {path:"repo",component:RepositoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
