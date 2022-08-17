import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminModule } from './admin/admin.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login/login.component';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './register/register.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardUserComponent } from './board-user/board-user.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { MapCompComponent } from './map-comp/map-comp.component';
import { SearchLocationComponent } from './search-location/search-location.component';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomepageComponent,
    RegisterComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent,
    MapCompComponent,
    SearchLocationComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HomeModule,
    SharedModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
