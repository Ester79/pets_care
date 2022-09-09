import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedHardwareComponent } from './shared/featured-hardware/featured-hardware.component';
import { FoodsComponent } from './shared/foods/foods.component';
import { HardwareEvaluationComponent } from './shared/hardware-evaluation/hardware-evaluation.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'foods', component: FoodsComponent},
  {path: 'featured', component: FeaturedHardwareComponent},
  {path: 'evaluation', component: HardwareEvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
