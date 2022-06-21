import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';

const routes: Routes = [
  {
    path: 'restaurants/:id',
    component: RestaurantDetailComponent
  },
  {
    path: 'restaurants',
    component: RestaurantListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
