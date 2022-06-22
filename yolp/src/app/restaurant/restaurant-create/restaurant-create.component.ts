import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {

  constructor(private restoService: RestaurantService, private router: Router) { }

  displayFormSubmitError: boolean = false;

  restaurant: Restaurant = {
    id: '',
    name: '',
    city: '',
    state: '',
    reviews: []
  };

  placeholders = {
    name: 'name of the restaurant',
    city: 'name of the city',
    state: 'name of the state'
  };

  ngOnInit(): void {
  }

  processForm(newRestoForm: NgForm) {
    if (newRestoForm.form.status === 'VALID') {
      this.restoService.createNewRestaurant(this.restaurant);
      this.router.navigateByUrl('/restaurant');
    } else {
      this.displayFormSubmitError = true;
    }
  }
}
