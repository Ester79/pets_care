import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { FoodsComponent } from './shared/foods/foods.component';
import { FeaturedHardwareComponent } from './shared/featured-hardware/featured-hardware.component';
import { HardwareEvaluationComponent } from './shared/hardware-evaluation/hardware-evaluation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FoodServiceService } from './services/food-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodsComponent,
    FeaturedHardwareComponent,
    HardwareEvaluationComponent,
    FooterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,


  ],
  providers: [FoodServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
