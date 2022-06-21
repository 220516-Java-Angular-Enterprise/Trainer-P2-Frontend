import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  constructor(private restoService: RestaurantService, private router: Router) { }

  restaurants: Restaurant[] = [];

  ngOnInit(): void {
    this.restoService.getAllRestaurants().then(r => {
      this.restaurants = r;
    })
  }

  goToRestaurantId(id: string) {
    this.router.navigateByUrl(`restaurants/${id}`)
  }
}