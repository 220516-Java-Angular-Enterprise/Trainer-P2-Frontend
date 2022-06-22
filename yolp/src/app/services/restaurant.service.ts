import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  /* Dependency Injection. */
  constructor(private http: HttpClient) { }

  private restoURL = "http://localhost:8080/yolp/restaurants";

  getAllRestaurants(): Promise<Restaurant[]> {
    return firstValueFrom(this.http.get<Restaurant[]>(this.restoURL));
  }

  getRestaurantById(id: string): Promise<Restaurant> {
    return firstValueFrom(this.http.get<Restaurant>(this.restoURL + "/" + id));
  }

  createNewRestaurant(resto: Restaurant) {
    return firstValueFrom(this.http.post(this.restoURL, resto));
  }
}
