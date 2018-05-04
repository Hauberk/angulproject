import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { GregistrationComponent } from './gregistration/gregistration.component';
import { HomeComponent } from './home/home.component';
import { AddtruckComponent } from './addtruck/addtruck.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    GregistrationComponent,
    HomeComponent,
    AddtruckComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
