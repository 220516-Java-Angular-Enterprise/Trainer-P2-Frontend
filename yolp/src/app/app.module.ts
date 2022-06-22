import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantCreateComponent } from './restaurant/restaurant-create/restaurant-create.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './user/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    NavBarComponent,
    RestaurantDetailComponent,
    RestaurantCreateComponent,
    AuthComponent
  ],
  imports: [
    AuthModule.forRoot({
      domain: environment.authDomain,
      clientId: environment.authClientId
    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
