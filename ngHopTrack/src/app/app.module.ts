import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { BeerNamePipe } from './pipes/beer-name.pipe';
import { CreateComponent } from './components/create/create.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeerNamePipe,
    CreateComponent,
    NavBarComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BeerNamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
