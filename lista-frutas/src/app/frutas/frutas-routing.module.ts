import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
 
const routes: Routes = [
  {
    path: 'frutas/home',
    component: HomeComponent,
  },
  {
    path: 'frutas/create',
    component: CreateComponent,
  },
  {
    path:'frutas/edit/:id',
    component: EditComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrutasRoutingModule { }
