import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private restoService: RestaurantService, private currRouter: ActivatedRoute) { }

  id: string = '';

  resto: Restaurant = {
    id: '',
    name: '',
    city: '',
    state: '',
    reviews: []
  }

  ngOnInit(): void {
    this.currRouter.params.subscribe(p => {
        this.id = p['id'];
        this.restoService.getRestaurantById(this.id).then(r => {
          this.resto = r;
        })
    })
  }
}
