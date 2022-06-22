import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {

  constructor(private restoService: RestaurantService, private router: Router) { }

  restaurant: Restaurant = {
    id: '',
    name: '',
    city: '',
    state: '',
    reviews: []
  };

  displayFormSubmitError: boolean = false;

  placeholders = {
    name: 'name of the restaurant',
    city: 'name of the city',
    state: 'name of the state'
  }

  processForm(newRestoForm: NgForm) {
    if (newRestoForm.form.status === 'VALID') {
      //now we can go ahead and send that post request
      this.restoService.createRestaurant(this.restaurant);
      this.router.navigateByUrl("/restaurants")
    }
    else {
      //This is a good place to show some kind of message to let users know, hey your form is wrong
      this.displayFormSubmitError = true;
    }
  }

  ngOnInit(): void {
  }

}
