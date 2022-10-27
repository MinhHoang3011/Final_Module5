import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TourListComponent} from "./component/tour-list/tour-list.component";
import {SaveComponent} from "./component/save/save.component";
import {EditTourComponent} from "./component/edit-tour/edit-tour.component";


const routes: Routes = [
  {
    path:'',
    component:TourListComponent
  },
  {
    path:'save',
    component:SaveComponent
  },
  {
    path:'edit-tour/:id',
    component:EditTourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
